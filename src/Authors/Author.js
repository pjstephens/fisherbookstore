import React, { Component} from "react";
import { AuthorDisplay } from "./AuthorDisplay";
import "./Author.css";


export default class Author extends Component {
    render() {
        return (
            <div className="Authors">
                <div className="lander">
                    <AuthorDisplay author={this.state.author} />
                </div>
            </div>
        );
    }
    constructor(props) {
        super(props);
        this.state ={
            author: [
                {
                    author: "Eric Evans"
                },
                {
                    author: "Nicole Forsgren"
                },
                {
                    author: "Paige"
                }
            ]
        };
    }
}