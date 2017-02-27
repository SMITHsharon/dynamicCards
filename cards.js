
var createButton = document.getElementById("create");
var userInput = document.getElementById("userText");
var cardToDOM = document.getElementById("newCardsHere");
var cardArray = [];

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
		addCardToCardArray();
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
// function creates a New Card by adding 
// user-generated card text to cardArray
//***************************************************
function addCardToCardArray () {
console.log("trying to add card to cardArray");
console.log("userInput.value :: ", userInput.value);

	cardArray.push(userInput.value);
	console.log("cardArray :: ", cardArray);
	console.log("cardArray[0] :: ", cardArray[0]);
}

//***************************************************
// function writes the New Card to the DOM
//***************************************************
function writeCardToDOM () {

	var domTempString; 

	domTempString = "<section id='newCard'><p id='domText'>";
	domTempString += "<h3 id='newCardHeader'>New Card!</h3>"
	domTempString += "<p id='domText'>" + userInput.value + "</p></section>";
	cardToDOM.innerHTML = domTempString;
}

// FROM SEARCH ...
// function addElement () { 
  // create a new div element 
  // and give it some content 
  // var newDiv = document.createElement("div"); 
  // var newContent = document.createTextNode("Hi there and greetings!"); 
  // newDiv.appendChild(newContent); //add the text node to the newly created div. 

  // add the newly created element and its content into the DOM 
//   var currentDiv = document.getElementById("div1"); 
//   document.body.insertBefore(newDiv, currentDiv); 
// }


//***************************************************
// EVENT HANDLER for <Create> button
//***************************************************
createButton.addEventListener("click", createCard);

