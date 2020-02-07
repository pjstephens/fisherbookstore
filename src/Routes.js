import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Homes/Home";
import Book from "./Books/Book";
import Author from "./Authors/Author";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/book" component={Book} />
            <Route path="/author" component={Author} />
        </Switch>
    );
}