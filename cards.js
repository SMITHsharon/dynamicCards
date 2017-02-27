
var createButton = document.getElementById("create");
var userInput = document.getElementById("userText");
var cardToDOM = document.getElementById("newCardsHere");


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

	if (validInput) {
		writeCardToDOM();
	}
	
}


//***************************************************
// function validates that user entered text 
// in <textarea> box
//***************************************************
function validateInput () {

	if (userInput.value !== "") {
		return true; // user entered text into text area
	} else {
		alert("You must enter something here for a card to be created.")
		return false; 
	}
}


//***************************************************
// function writes the New Card to the DOM
// (i.e., creates a New Card)
//***************************************************
function writeCardToDOM () {

	var domTempString; 

	domTempString = "<section id='newCard'><p id='domText'>";
	domTempString += "<strong>New Card!</strong>"
	domTempString += userInput.value + "</p></section>";
	cardToDOM.innerHTML = domTempString;

}



//***************************************************
// EVENT HANDLER for <Create> button
//***************************************************
createButton.addEventListener("click", createCard);

