import React from "react";
import "./MyComponent.css";
import gif from "./img/tenor.gif";
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        console.log("Button pressed");
        fetch('http://localhost:5000/second-page').then(response => {
            if (response.ok){
                navigate('/second-page');
            }
            else{
                console.error("Error fetching second page");
            }
        })
        .catch(error => {
            console.error("Error: ", error);
        });

    };

    return(
        <div className ="default-style">
            <h1>Hello, my name is Sachin Seizer</h1>
            <h2 className = "subheader-style">And this is my website</h2>
            <img src ={gif} alt = "GIF" className = "gif-style" />
            <button onClick = {handleButtonClick}>Go to Second Page</button>
        </div>
    );
};
export default MyComponent;