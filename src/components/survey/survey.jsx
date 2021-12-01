import {useState} from "react";
import {Alert, Button} from "react-bootstrap";
import * as React from "react";
import StarRatings from "react-star-ratings";

const Survey = ({sourceCode, testCode, backendSurveyHost}) => {

    const [surveyTemplateString, setSurveyTemplateStringState] = useState("");
    const [surveyTemplateIsReady, setSurveyTemplateIsReadyState] = useState(false);
    const [notAllAnswered, setNotAllAnsweredState] = useState(true);
    const [isSubmitted, setIsSubmittedState] = useState(false);

    let questionsCount = 0;
    const [answers, setAnswersState] = useState(new Map());
    const updateAnswersMap = (k, v) => {
        setAnswersState(new Map(answers.set(k, v)));
    };

    function checkValueFromMap(key) {
        if (!answers.has(key)) {
            return -1;
        }
        return answers.get(key);
    }

    function checkAllAnswered() {
        let ind = 1;
        let flag = true;
        while (ind <= questionsCount) {
            const questionKey = `question=${ind}`;
            if (answers.get(questionKey) === -1) {
                flag = false;
                break;
            }
            ind += 1;
        }
        setNotAllAnsweredState(!flag);
    }


    const changeRating = (newRating, name) => {
        updateAnswersMap(name, newRating);
        checkAllAnswered();
    };

    let surveyTemplate = {};
    if (surveyTemplateIsReady) {
        surveyTemplate = (JSON.parse(surveyTemplateString).parts.map(part => {
            const quItems = part.fqs.map(funct => {
                    let questionCount = 0;
                    const functItems = funct.qil.map(qa => {
                        if (qa.tp === "RATED") {
                            questionCount += 1;
                            questionsCount += 1;
                            const questionKey = `question=${questionCount}`;
                            return (<div style={{
                                    padding: "5px",
                                    marginBottom: "3%",
                                    marginTop: "3%"
                                }}>
                                    <p style={{marginBottom: "1%"}}>{qa.txt}</p>
                                    <StarRatings
                                        rating={checkValueFromMap(questionKey)}
                                        starRatedColor="#FFD505"
                                        starHoverColor="#FFD505"
                                        starDimension="30px"
                                        changeRating={changeRating}
                                        numberOfStars={5}
                                        name={questionKey}
                                    />
                                </div>
                            );
                        }
                        return (<p> Not ranking</p>);

                    });
                    return (<>
                        <div
                            style={{
                                backgroundColor: "#CDE7F0",
                                borderRadius: "5px",
                                padding: "10px",
                                marginBottom: "2%"
                            }}
                        >
                            {funct.tl.txt}
                        </div>
                        {functItems}
                    </>);
                }
            );
            return quItems;
        }));
    }

    function submitResultSurvey() {
        const surveyParts = (JSON.parse(surveyTemplateString).parts.map(part => {
            const quItems = part.fqs.map(funct => {
                let questionCount = 0;
                const functItems = funct.qil.map(qa => {
                    questionCount += 1;
                    const questionKey  = `question=${questionCount}`;
                    const result = answers.get(questionKey );
                    return {
                        "id": qa.id,
                        "res": result
                    };
                });
                return {
                    // title
                    "tl": {"id": funct.til.id},
                    // function info
                    "fi": {
                        "id": -1,
                        "txt": sourceCode
                    },
                    // test info list
                    "til": [{
                        "id": -1,
                        "txt": testCode
                    }],
                    // question info list
                    "qil": functItems
                };
            });
            return {
                "id": 1,
                // function questions
                "fqs": quItems,
                // title
                "tl": {"id": part.tl.id}
            };
        }));

        const surveyResults = {
            "id": 1,
            "parts": surveyParts
        };

        const host = backendSurveyHost;
        const req = `${host}post_survey_results`;
        const isInternetConnected = navigator.onLine;
        if (!isInternetConnected) {
            return;
        }
        fetch(req, {
            body: JSON.stringify(surveyResults),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST"
        }).then(response => response.json())
            .then(response => JSON.stringify(response))
            .then(response => {
                const obj = JSON.parse(response);
                if (obj.statusCode.localeCompare("OK") === 0) {
                    setIsSubmittedState(true);
                }
            });
    }

    function getSurveyTemplate() {
        const isInternetConnected = navigator.onLine;
        if (!isInternetConnected) {
            return;
        }
        const req = `${backendSurveyHost}questionnaire-template`;
        fetch(req, {
            body: JSON.stringify({"id": 1}),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            method: "POST"
        }).then(response => response.json())
            .then(response => JSON.stringify(response))
            .then(response => {
                setSurveyTemplateStringState(response);
                JSON.parse(response).parts.map(part => {
                    part.fqs.map(funct => {
                        let questionCount = 0;
                        funct.qil.map(qa => {
                            if (qa.tp === "RATED") {
                                questionCount += 1;
                                const questionKey  = `question=${questionCount}`;
                                updateAnswersMap(questionKey, -1);
                            }
                        });
                    });
                });

                setSurveyTemplateIsReadyState(true);
            });
    }

    React.useEffect(() => {
            getSurveyTemplate();
        }
        , []);

    return (
        // <> is necessary to return the object from the function, it is skipped during rendering
        <>
            {(!isSubmitted) && <Alert variant="dark"
                                      style={{
                                          width: "50%",
                                          marginLeft: "3px",
                                          minWidth: "440px",
                                          height: "100%",
                                          marginRight: "0px",
                                          marginBottom: "0px",
                                          backgroundColor: "#f9f9f9",
                                          borderColor: "lightblue",
                                          borderWidth: "5px"

                                      }}>
                <p><h4 style={{
                    textAlign: "center"
                }}>Help us to become better</h4></p>
                {surveyTemplateIsReady && surveyTemplate}
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2%"
                }}>
                    <Button
                        variant="info"
                        onClick={submitResultSurvey}
                        disabled={notAllAnswered}
                    >Submit</Button>
                </div>
            </Alert>}
            {isSubmitted && <Alert variant="dark"
                                   style={{
                                       width: "50%",
                                       marginLeft: "3px",
                                       minWidth: "440px",
                                       height: "30vh",
                                       marginRight: "0px",

                                       overflow: "auto",
                                       marginBottom: "0px",
                                       minHeight: "30hv",
                                       backgroundColor: "#f9f9f9",
                                       borderColor: "lightblue",
                                       borderWidth: "5px"
                                   }}>
                <p><h5 style={{
                    textAlign: "center"
                }}>Thanks for your opinion!</h5></p>
            </Alert>}
        </>
    );

};
export default Survey;
