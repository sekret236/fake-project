import React from 'react';
import ReactDOM from "react-dom/client";

function App() {
    return (
        <>
            <h1>Hello App.js</h1>
            <ul>
                <li>list item 1</li>
                <li>list item 2</li>
                <li>list item 3</li>
            </ul>
        </>
    );
 }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);