function fct(){
    window.location.href='index.html';

  }
  var courses = [{
    image: 'images/javascriptDef.png',
    title: 'what is javascript?',
    category: 'JS',
    price: 9.9
},
{
    image: 'images/htmlBasics.PNG',
    title: 'basics of HTML',
    category: 'HTML',
    price: 5.9
},
{
    image: 'images/htmlElements.png',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 9.9
},
{
    image: 'images/cssSelectors.jpg',
    title: 'CSS selectors',
    category: 'CSS',
    price: 69.9
},
{
    image: 'images/javascriptVariables.png',
    title: 'variables and data type of javascript',
    category: 'JS',
    price: 19.9
},
{
    image: 'images/javascriptOperators.png',
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: 29.9
},
{
    image: 'images/htmlAttrVal.jpg',
    title: 'HTML attributes and values',
    category: 'HTML',
    price: 19.9
},
{
    image: 'images/cssProperties.png',
    title: 'CSS properties',
    category: 'CSS',
    price: 29.9
},
{
    image: 'images/javascriptObjects.png',
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: 39.9
},
{
    image: 'images/cssMesures.png',
    title: 'mesures and unites of CSS',
    category: 'CSS',
    price: 19.9
},
{
    image: 'images/cssAnimation.png',
    title: 'CSS animations',
    category: 'CSS',
    price: 19.9
},
{
    image: 'images/javascriptFunctions.png',
    title: 'The basics of javascript',
    category: 'JS',
    price: 29.9
},
{
    image: 'images/javascriptEvents.png',
    title: 'javascript events',
    category: 'JS',
    price: 59.9
},
{
    image: 'images/cssColors.png',
    title: 'css colors',
    category: 'css',
    price: 29.9
},
{
    image: 'images/phpBasics.png',
    title: 'getting started with php',
    category: 'php',
    price: 15.9
},
{
    image: 'images/javascriptFunctions2.png',
    title: 'functions and loops with javascript',
    category: 'JS',
    price: 19.9
},
{
    image: 'images/phpDataBase.png',
    title: 'connecting to database using PHP',
    category: 'PHP',
    price: 29.9
},
{
    image: 'images/phpCRUD.png',
    title: 'manipulating crud using php',
    category: 'php',
    price: 45.9
},
{
    image: 'images/javascriptDOM.png',
    title: 'DOM the power of javascript',
    category: 'JS',
    price: 23.9
}
]

let card1=document.getElementById('1');
let card2=document.getElementById('2');
let card3=document.getElementById('3');
function randd(){
    let rand1=Math.floor(Math.random()*19);
    let rand2=Math.floor(Math.random()*19);
    let rand3=Math.floor(Math.random()*19);

    let element1=courses[rand1];
    let element2=courses[rand2];
    let element3=courses[rand3];

    card1.setAttribute("src",element1.image);
    card2.setAttribute("src",element2.image);
    card3.setAttribute("src",element3.image);
    


}
window.onload=randd();
