
var createButton = document.getElementById("create");
var userInput = document.getElementById("userText");


//***************************************************
// When user enters text into <textarea> box 
// clicks <Create>, function creates a new card
// and writes the cardHTML to the DOM
//
// Displays <alert> to user if clicks <Create> button
// without entering any text
//***************************************************
function createCard (clickEvent) {

	var validInput;
	validInput = validateInput();
	// create new card
	// write the card to the DOM
}

function validateInput () {

	if (userInput.value !== "") {
		return true; // user entered text into text area
	} else {
		alert("You must enter something here for a card to be created.")
		return false; 
	}
}



//***************************************************
// EVENT HANDLER for <Create> button
//***************************************************
createButton.addEventListener("click", createCard);

