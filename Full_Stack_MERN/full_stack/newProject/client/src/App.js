import React from "react";
import { Router } from "@reach/router";

// views
import Main from "./views/Main";
import Update from "./views/Update";

// components
import Detail from "./components/Detail";

function App() {
    return (
        <div className="App">
            <Router>
                <Main path="/people" />
                <Detail path="/people/:id" />
                <Update path="people/edit/:id" />
            </Router>
        </div>
    );
}

export default App;
