document.getElementById("textinputid").addEventListener('input', function(event){
    //console.log(event);
    const button = document.getElementById("buttonid");
    const userInput = event.target.value;
    const correctAnswer = 'electric mucus';

    button.style.backgroundColor = userInput.toLowerCase() === correctAnswer // IF USER INPUTS CORRECT ANSWER, TURN BUTTON AQUAMARINE
    ? "aquamarine"
    : userInput;

    button.disabled = userInput.toLowerCase() !== correctAnswer; // DISABLE BUTTON IF USER INPUTS INCORRECT ANSWER
});


// ORIGINAL INSTRUCTOR ANSWER
/*document.getElementById("textinputid").addEventListener("input", function(event) {
   const button = document.getElementById("buttonid");
   const userInput = event.target.value;

   button.style.backgroundColor = 'electric mucus' === userInput.toLowerCase() ? 'aquamarine ' : userInput;
   button.disabled = 'electric mucus' !== userInput.toLowerCase();
});*/
