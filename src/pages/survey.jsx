import * as React from "react";

import Layout from "../components/layout";
import "./styles/page.css";
import "./styles/contact.css";
import Editor from "@monaco-editor/react";
import {highlight, languages} from "prismjs/components/prism-core";
import SEO from "../components/seo";
import withTrans from "../i18n/withTrans";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";
import {
    Button,
    Form,
    Alert
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {useState} from 'react';

require("prismjs/components/prism-c");
require("prismjs/components/prism-cpp");

const SurveyPage = () => {

    // this page isn't connected with the survey server, so it is rendering from a local json
    const survey = require("src/examples_json/survey.json");

    const [answers, setAnswersState] = useState(new Map());
    const updateAnswersMap = (k, v) => {
        setAnswersState(new Map(answers.set(k, v)));
    };

    let partCount = 0;
    let questionCount = 0;
    const surveyItems = survey.parts.map(part => {
        partCount += 1;
        questionCount = 0;
        const quItems = part.part.questions.map(qa => {
            questionCount += 1;
            const questionKey = `part=${partCount}&question=${questionCount}`;

            return (
                <Alert variant="dark">
                    <Editor
                        height="440px"
                        width="660px"
                        theme="my-light"
                        language="java"
                        value={qa}
                        options={{
                            tabSize: 4,
                            scrollBeyondLastLine: false,
                            readOnly: true,
                            wordWrap: "on"
                        }}
                    />

                    <p>How generated comment affects understanding of the test case?</p>
                    <Form>
                        <div key="inline-radio" className="mb-3"
                        >
                            <Form.Check
                                label="It's easier to understand"
                                name={questionKey}
                                type="radio"
                                id="1"
                                checked={answers.get(questionKey) === 1}
                                onChange={(e) =>
                                    updateAnswersMap(questionKey, 1)}
                            />
                            <Form.Check
                                label="It's harder to understand"
                                name={questionKey}
                                type="radio"
                                id="2"
                                checked={answers.get(questionKey) === 2}
                                onChange={(e) => updateAnswersMap(questionKey, 2)}
                            />
                            <Form.Check
                                label="Doesn't affect"
                                name={questionKey}
                                type="radio"
                                id="3"
                                checked={answers.get(questionKey) === 3}
                                onChange={(e) => updateAnswersMap(questionKey, 3)}
                            />
                        </div>
                    </Form>
                </Alert>);
        });

        return (
            <Alert variant="secondary">
                <div>
                    <h2>Part {partCount}</h2>
                    <p>The code of function</p>
                    <Editor
                        height="440px"
                        width="660px"
                        theme="my-light"
                        language="java"
                        value={part.part.function}
                        options={{
                            tabSize: 4,
                            scrollBeyondLastLine: false,
                            readOnly: true,
                            wordWrap: "on"
                        }}
                    />

                    <p>Generated Tests for it:</p>
                    {quItems}
                </div>
            </Alert>
        );
    });

    let monacoThemesDefined = false;
    const defineMonacoThemes = monaco => {
        if (monacoThemesDefined) {
            return;
        }
        monacoThemesDefined = true;
        monaco.editor.defineTheme("my-light", {
            base: "vs",
            inherit: true,
            rules: [],
            colors: {
                "editor.background": "#f6f6f6",
                "minimap.background": "#f9f9f9"
            }
        });
    };

    function submitResult() {
        let partCountRes = 0;
        let questionCountRes = 0;
        const surveyItemsAnswers = survey.parts.map(part => {
            partCountRes += 1;
            questionCountRes = 0;
            const quItems = part.part.questions.map(qa => {
                questionCountRes += 1;
                const questionKey = `part=${partCountRes}&question=${questionCountRes}`;
                return ([qa, answers.get(questionKey)]);
            });
            return (
                {
                    "part": {
                        "function": part.part.function,
                        "questions": quItems
                    }
                });
        });

        const parts = {"parts": surveyItemsAnswers};
        console.log(JSON.stringify(parts));
    }

    return (
        <Layout>
            <SEO title="UTBot Online"/>
            <div
                style={{
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    // overflow: "auto",
                    height: "100%",
                    display: "flex"
                }}
            >
                <div style={{
                    flexDirection: "column",
                    minWidth: "440px",
                    height: "80%",
                    width: "1000px",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    marginTop: "10px",
                    margiBottom: "10px"
                }}>
                    <h1>Survey</h1>
                    <p>Help us to make our product the best!</p>
                    <p>There are functions and tests for them. Please rate the comment block above each test
                        function.</p>

                    {surveyItems}

                    <Button
                        variant="primary"
                        style={{marginTop: "5px", marginBottom: "25px", width: "125px"}}
                        onClick={submitResult}
                    >Submit</Button>
                </div>
            </div>
        </Layout>
    );
};

export default withTrans(SurveyPage);