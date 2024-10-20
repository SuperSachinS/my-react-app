import React from "react";
import "./MyComponent.css";
import gif from "./img/tenor.gif";
const MyComponent = () => {
    return(
        <div className ="default-style">
            <h1>Hello, my name is Sachin Seizer</h1>
            <h2 className = "subheader-style">And this is my website</h2>
            <img src ={gif} alt = "GIF" className = "gif-style" />
        </div>
    );
};
export default MyComponent;