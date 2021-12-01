import * as React from "react";

import { Card } from "react-bootstrap";

const ThirdCard = (props) => {
    const title = props.title ? props.title : ""; 
    const mainBody = props.mainBody ? props.mainBody : [];
    const footerBody = props.footerBody ? props.footerBody : [];
    const className = props.className ? props.className : "";
    return (
        <Card className={`thirdCard ${className}`} bg="light">
            <Card.Header as="h3">{title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {mainBody}
                </Card.Text>
            </Card.Body>
            { !!footerBody.length && 
                (
                    <Card.Footer> 
                        {footerBody}
                    </Card.Footer>
                )
            }
           
    </Card>
    );
};


export default ThirdCard;