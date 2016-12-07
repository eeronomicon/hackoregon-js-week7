# hackoregon-js-week7
Week 7 exercises for Hack Oregon's JavaScript Fundamentals class

## Event Handler
Use the starter project provided.
There are six buttons. Write some JavaScript so that each button changes its text to “Clicked!” when clicked.
Things you’ll need:
document.getElementsByClassName()
A loop to iterate over the elements you just got
element.addEventListener(“eventname”, callback);
element.innerHTML

## Questions
What’s the return value of asynchronous function like button.addEventListener(... , ...); ?
Do callbacks need to be named?
What’s the result of the following code?
function printing() {
console.log(1); 
setTimeout(function() { console.log(2); }, 1000); 
setTimeout(function() { console.log(3); }, 0); 
console.log(4);
}
printing();

## Timeout
Remember from earlier that our event listeners are not running when we define them, and this creates scope issues.
Use the files you created from the previous exercise.
Now write your event listener so that each button waits the appropriate number of seconds after you click it before it changes. Button One should wait one second to change, button four four seconds, etc.
Things you’ll need:
setTimeout()
Some sort of closure (see week 2 slides)

## Extra Credit
Create a list of sport names (use <ul> and <li>) from this array: 
var sports = [
  {sport: 'basketball', players: 4},
  {sport: 'soccer', players: 12}, 
  {sport: 'football', players: 23}, 
  {sport: 'ping pong', players: 3}
];
Have a click event on each <li> that alerts the number of players for each sport.
If you’re having problems figuring out how to solve this, one way to solve it involves data attributes. https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes 
