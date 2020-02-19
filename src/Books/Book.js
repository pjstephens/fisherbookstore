import React, { Component } from "react";
import { BookDisplay } from "./BookDisplay";
import "./Book.css";

export default class Book extends Component {
    render() {
        return (
            <dic className="Books">
                <div className="lander">
                    <BookDisplay book={this.state.book} />
                </div>
            </dic>
        );
    }
    constructor(props) {
        super(props);
        this.state ={
            book: [
                {
                    id:1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id: 3,
                    title: "Book",
                    author: "Paige",
                    isbn: "937-1942937331"
                },
                {
                    id: 4,
                    title: "Another Book",
                    author: "Paige",
                    isbn: "878-1937688321"
                },
                {
                    id: 5,
                    title: "Another Book",
                    author: "Paige",
                    isbn: "978-1942745891"
                },
                {
                    id: 6,
                    title: "Another Book",
                    author: "Paige",
                    isbn: "978-1944738251"
                },
                {
                    id: 7,
                    title: "Another Book",
                    author: "Paige",
                    isbn: "946-11748598331"
                },
                {
                    id: 8,
                    title: "Another Book",
                    author: "Paige",
                    isbn: "978-1942748375"
                }
            ]
        };
    }
}
