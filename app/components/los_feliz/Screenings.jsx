import React from "react";

var style;

export default class Screenings extends React.Component {
    constructor(props) {
        super(props);
        style = {
            textAlign: 'center'
        }
    }

    render() {
        return (
            <div className="content">
                <div style={style} className="contentInset"><h1>Screenings: Coming Soon</h1></div>
            </div>
        )
    }
}