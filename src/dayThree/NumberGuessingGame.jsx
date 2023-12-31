import React, { useEffect, useState } from "react";

const NumberGuessingGame = () => {
    const [randomNumber, setRandomNumber] = useState();
    const [inputNumber, setInputNumber] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Set random number
        const num = Math.floor(Math.random() * 20) + 1;
        setRandomNumber(num);
    }, []);

    const handleInputChange = (e) => {
        // Set Input number
        setInputNumber(e.target.value);
    };

    useEffect(() => {
        // Check if input number matches the random number
        checkNumber();
    }, [inputNumber]);

    const checkNumber = () => {
        if (!inputNumber) {
            setMessage("Enter a number");
        } else if (parseInt(inputNumber, 10) < randomNumber) {
            setMessage("Moye Moye!!");
        } else if (parseInt(inputNumber, 10) > randomNumber) {
            setMessage("Moye Moye!!");
        } else {
            setMessage("You got it right!");
        }
    };

    return (
        <div>
            <h4>Guess a number between 1 to 20</h4>
            <input
                type="number"
                min={1}
                max={20}
                value={inputNumber}
                onChange={handleInputChange}
            />
            <br />
            {message && <p>{message}</p>}
        </div>
    );
};

export default NumberGuessingGame;
