//we can use getElementByTagName, getElementsByClassName, getElementById to access DOM for a particular element object. we can access that element object like array to manipulate anything.
const listItems = document.getElementsByTagName('li');

//By createElement we can add element to DOM by javascript
const newListItem = document.createElement('li');
newListItem.innerHTML = 'Friend-11';

//Adding new item to parent
const unOrderedList = document.getElementById('unorder-list');
unOrderedList.appendChild(newListItem);



//we can also create new element by (``) caret
//first create an element
const div = document.createElement('div');
//then add content or elements inside of the empty element
div.innerHTML = `
<h4>Friend-12</h4>
<ul>
<li>item-1</li>
<li>item-2</li>
</ul>
`;
//then find parent and add the element
var paragraph = document.getElementById('info');
paragraph.appendChild(div);



//using for loop on element object array
for (let i = 0; i < listItems.length; i++) {
    let listItem = listItems[i];

    //adding styles by using js
    listItem.style.listStyle = 'none';
    listItem.style.fontWeight = 'bold';
    listItem.style.fontSize = '18px';
    listItem.style.color = 'blue';
    listItem.style.padding = '20px';
}

//acessing on dom by quarySelector & quarySelectorAll
const secondListItem = document.querySelector('ul #list-item-2');

//we use innerHTML to show inner content of an element object
console.log(secondListItem.innerHTML);

//by using innerHTML we can change inner content of an element
secondListItem.innerHTML = 'My special friend';



//by using getAttribute we an get information of any attribute of an element object
const attributeValue = secondListItem.getAttribute('id');
const styleAttributeValue = secondListItem.getAttribute('style');
console.log(attributeValue);
console.log(styleAttributeValue);

//by using setAttribute we can set attribute to an element
secondListItem.setAttribute('title', 'My special friend is allah');
secondListItem.setAttribute('class', 'red');

//Using parentNode childNode & children we can see parent, child(including text) and children(only child element tag) respectively\
console.log(secondListItem.parentNode);
console.log(secondListItem.parentNode.parentNode);
console.log(secondListItem.childNodes);
console.log(secondListItem.children);

//we can remove element by removeChild but here we must call parent by getElementById
const friends = document.getElementById('unorder-list');
console.log(friends.children);
const third = friends.children[4];
console.log(third);
friends.removeChild(third);
