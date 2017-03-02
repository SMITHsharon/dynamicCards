
var createButton = document.getElementById("create");

var userInput = document.getElementById("userText");
var cardsToDOM = document.getElementById("newCardsHere");
var cardArray = [];



//***************************************************
// CREATE CARD
//***************************************************
// When user enters text into <textarea> box 
// clicks <Create>, function creates a new card
// (pushes <userInput> text string for new Card to cardArray)
// then writes the cardHTML to the DOM
//
// Displays <alert> to user if clicks <Create> button
// without entering any text
//***************************************************
function createCard (clickEvent) {

	var validInput;
	validInput = validateInput();

	if (validInput) {

		cardArray.push(userInput.value);

		writeAllToDOM();
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
		return true; 
	} else {
		alert("You must enter something here for a card to be created.")
		return false; 
	}
}


//***************************************************
// function writes one New Card to a string
// RETURNS the string, to be written with all cards
// in one statement to the DOM
//***************************************************
function writeCardsToDOM (thisCard, index, deleteButtonID) {

	var domTempString; 

	domTempString = "<section class='newCard'><p class='domText'>";
	domTempString += "<h3 class='newCardHeader'>Lorem Card: " + index + "</h3>"
	domTempString += "<p class='domText'>" + thisCard + "</p>";
	domTempString += "<div class='buttonDiv'><button type='submit' id='" + deleteButtonID;
	domTempString += "' class='delButtons' value='Delete'>Delete</button></div></section>";

	return domTempString;
}


function writeAllToDOM () {

	var domCards = "";
	var deleteButtonID = "delete"; // +index

		// iterate through cardArray to write 
		// the HTML DOM string for each Card
		for (var i=0; i<cardArray.length; i++) {

			// generate a unique ID for the separate <Delete> buttons
			// to be generated for each Card
			deleteButtonID = "delete" + (i+1);
			domCards += writeCardsToDOM(cardArray[i], i+1, deleteButtonID);
		}

		// write all the Cards to the DOM
		cardsToDOM.innerHTML = domCards;
}



//***************************************************
// DELETE CARD
//***************************************************
// function determines which Card in the cardArray to be deleted
// and removes (splices) that card from the array
// then rewrites cardArray to the DOM
//***************************************************
function deleteCard (e) {

	if (e.target.className === "delButtons") {

		var cardIndex = getIndex(e.target.id);
		
		cardArray.splice(cardIndex, 1);

		writeAllToDOM();
	}
}


//***************************************************
// <Delete> button IDs are unique to cards, i.e., "delete1" ; [arrayIndex+1]
// function parses the idString for the <Delete> button
// of the selected Card to grab the Card's ID#
//***************************************************
function getIndex (cardID) { 

	var tempStr = cardID.substr(6);
	tempStr = parseInt(tempStr, 10);
	return tempStr-1; // cardIndex in CardArray
}



//***************************************************
// EVENT HANDLERs for <Create> and <Delete> buttons
//***************************************************
createButton.addEventListener("click", createCard);

cardsToDOM.addEventListener("click", deleteCard);






