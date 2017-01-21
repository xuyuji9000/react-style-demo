import React, { Component } from "react";
export default class Letter extends Component {
    letterStyle = () => {
        return {
            padding: 10,
            margin: 10,
            backgroundColor: this.props.bgcolor,
            color: "#333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: 32,
            textAlign: "center",
        };
    }

    render() {
        
        return (
            <div style={this.letterStyle()}>
                {this.props.children}
            </div>
        );
    }
}
