
var createButton = document.getElementById("create");
// var deleteButton = document.getElementById("delete");

var userInput = document.getElementById("userText");
var cardsToDOM = document.getElementById("newCardsHere");
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
	var deleteButtonID = "delete"; // +index

	var validInput;
	validInput = validateInput();

	if (validInput) {

		cardArray.push(userInput.value);

		// iterate through cardArray to write 
		// the HTML DOM string for each Card
		for (var i=0; i<cardArray.length; i++) {

			deleteButtonID = "delete" + (i+1);
			domCards += writeCardsToDOM(cardArray[i], i+1, deleteButtonID);
		}

		// write all the Cards to the DOM
		cardsToDOM.innerHTML = domCards;

		//***************************************************
		// add an EVENT HANDLER for each separate card's <Delete> button
		//***************************************************
		var deleteButton = document.getElementById(deleteButtonID);
		for (var i=0; i<cardArray.length; i++) {
// loop through CardsToDOM ...
// cardsToDOM.childNodes[i]
			deleteButton = document.getElementById(deleteButtonID);
			deleteButton.addEventListener("click", deleteCard);
		}
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
// function writes the New Card to a string
// RETURNS the string, to be written with all cards
// in one statement to the DOM
//***************************************************
function writeCardsToDOM (thisCard, index, deleteButtonID) {

	var domTempString; 
console.log("deleteButtonID :: ", deleteButtonID);

	domTempString = "<section id='newCard'><p id='domText'>";
	domTempString += "<h3 id='newCardHeader'>Lorem Card: " + index + "</h3>"
	domTempString += "<p id='domText'>" + thisCard + "</p>";
	domTempString += "<div id='buttonDiv'><button type='submit' id='" + deleteButtonID;
	domTempString += "' class='delButtons' value='Delete'>Delete</button></div></section>";

console.log("DOM Temp String :: ", domTempString);
	return domTempString;
}



//***************************************************
// When user clicks <Delete> on one of the 
// dynamically created cards, function 
// removes that Card from the DOM
// (removes that Card from cardArray)
// and rewrites the cardHTML to the DOM

//***************************************************
function deleteCard (clickEvent) {
console.log("in deleteCard");
console.log("document.getElementById('id')");
	// var domCards = "";

	// var validInput;
	// validInput = validateInput();

	// if (validInput) {

	// 	cardArray.push(userInput.value);

		// iterate through cardArray to write 
		// the HTML DOM string for each Card
	// 	for (var i=0; i<cardArray.length; i++) {
	// 		domCards += writeCardsToDOM(cardArray[i], i+1);
	// 	}

	// 	// write all the Cards to the DOM
	// 	cardsToDOM.innerHTML = domCards;
	// }
	
	// userInput.value = "";
	// userInput.placeholder = "Text In Here...";
}



//***************************************************
// EVENT HANDLERs for <Create> button
//***************************************************
createButton.addEventListener("click", createCard);








