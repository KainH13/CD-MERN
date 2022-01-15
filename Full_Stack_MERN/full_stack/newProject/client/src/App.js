import React from "react";
import { Router } from "@reach/router";

// views
import Main from "./views/Main";

function App() {
    return (
        <div className="App">
            <Router>
                <Main path="/home" />
            </Router>
        </div>
    );
}

export default App;
