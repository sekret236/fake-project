import React from 'react';
import ReactDOM from "react-dom/client";
import App from './container/App/App'

const Header = () => <h1>Hello App.js</h1>;

/*function AppList() {
    return (
        <ul>
            <li>list item 1</li>
            <li>list item 2</li>
            <li>list item 3</li>
        </ul>
    );
}

function App() {
    return (
        <>
            <Header />
            <AppList />
        </>
    );
}*/



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);