// FUNCTION TO CHANGE LUIGI'S 'Italian Steak Sandwich' INGREDIENT LIST CONTENT & COLOR
var btn = document.querySelector('button');
function change() {

  // FOR CHANGING FRED IMAGE
  document.getElementById("image").src = "img/fred-fred.gif";

  // FOR CHANGING TOP STATEMENT TEXT 'This Page is...'
	var el = document.getElementById('list_item');
	var elText = el.firstChild.nextSibling.nodeValue;
	elText = elText.replace(elText, ' Now Beautiful & Correct. Now Fred is Happy.');
	el.firstChild.nextSibling.nodeValue = elText;

  // FOR CHANGING INGREDIENT LIST ITEM ONE
	var el = document.getElementById('one');
	var elText = el.firstChild.nextSibling.nodeValue;
	elText = elText.replace(elText, ' Ground Beef');
	el.firstChild.nextSibling.nodeValue = elText;
  el.setAttribute('class', 'li');  // FOR COLOR

  // FOR CHANGING INGREDIENT LIST ITEM TWO
	var el = document.getElementById('two');
	var elText = el.firstChild.nextSibling.nodeValue;
	elText = elText.replace(elText, ' French Bread');
	el.firstChild.nextSibling.nodeValue = elText;

	// FOR CHANGING INGREDIENT LIST ITEM THREE
	var el = document.getElementById('three');
	var elText = el.firstChild.nextSibling.nodeValue;
	elText = elText.replace(elText, ' Lettuce');
	el.firstChild.nextSibling.nodeValue = elText;
  el.setAttribute('class', 'li');  // FOR COLOR

  // FOR CHANGING INGREDIENT LIST ITEM FOUR
	var el = document.getElementById('four');
	var elText = el.firstChild.nextSibling.nodeValue;
	elText = elText.replace(elText, ' Onions');
	el.firstChild.nextSibling.nodeValue = elText;

	// FOR CHANGING INGREDIENT LIST ITEM FIVE
	var el = document.getElementById('five');
	var elText = el.firstChild.nextSibling.nodeValue;
	elText = elText.replace(elText, ' Sauce');
	el.firstChild.nextSibling.nodeValue = elText;
  el.setAttribute('class', 'li');  // FOR COLOR

	// FOR CHANGING TOP STATEMENT COLOR & FONT 'This Page is...'
	var el = document.querySelector('h4');
	el.setAttribute('class', 'line-1');

	// FOR CHANGING 'Luigi's Restaurant Presents' COLOR & FONT
	var el = document.querySelector('h1');
	el.setAttribute('class', 'line-2');

	// FOR CHANGING 'The Italian Steak Sandwich' COLOR & FONT
	var el = document.querySelector('h2');
	el.setAttribute('class', 'line-3');

	// FOR CHANGING 'Sandwich Ingredients' COLOR & FONT
	var el = document.querySelector('h3');
	el.setAttribute('class', 'line-4');

	// FOR ADDING INGREDIENT LIST ITEM SIX
	var newLi = document.createElement('li');
	var newText = document.createTextNode('And most important of all, Fred Spice');
	newLi.appendChild(newText);
	var position = document.getElementsByTagName('ul')[0];
	position.appendChild(newLi);

	// FOR CHANGING UN-ORDERED LIST ITEM COLORS
	var el = document.querySelector('ul');
	el.setAttribute('class', 'for-ul');

  // CHANGES TEXT AND COLOR ON BUTTON
  document.getElementById("demo").innerHTML = "Thanks For Helping Fred Fix The Page";
	var el = document.querySelector('button');
	el.setAttribute('class', 'for-button');

  // FOR CENTERING 'Close Window' AND CHANGING FONT
	var el = document.querySelector('h5');
	el.setAttribute('class', 'close');
}
btn.addEventListener('click', change);
