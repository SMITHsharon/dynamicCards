
var createButton = document.getElementById("create");
var userInput = document.getElementById("userText");
var cardToDOM = document.getElementById("newCardsHere");
var cardArray = [];

//***************************************************
// When user enters text into <textarea> box 
// clicks <Create>, function creates a new card
// (pushes new Card to cardArray)
// and writes the cardHTML to the DOM
//
// Displays <alert> to user if clicks <Create> button
// without entering any text
//***************************************************
function createCard (clickEvent) {

	var domCards = "";

	var validInput;
	validInput = validateInput();

	if (validInput) {

		cardArray.push(userInput.value);

		for (var i=0; i<cardArray.length; i++) {
			domCards += writeCardsToDOM(cardArray[i]);
		}

		cardToDOM.innerHTML = domCards;
	}
	
	userInput.value = "";
	userInput.placeholder = "Text In Here...";
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
//***************************************************
function writeCardsToDOM (thisCard) {

	var domTempString; 

	domTempString = "<section id='newCard'><p id='domText'>";
	domTempString += "<h3 id='newCardHeader'>New Card!</h3>"
	domTempString += "<p id='domText'>" + thisCard + "</p></section>";

	return domTempString;
}



//***************************************************
// EVENT HANDLER for <Create> button
//***************************************************
createButton.addEventListener("click", createCard);

