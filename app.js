var buttons = document.getElementsByClassName("button");
var waitForIt = 0;
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    if (this.innerHTML !== "Clicked!") {
      waitForIt++;
      setTimeout(function() { this.innerHTML = "Clicked!" }.bind(this), (waitForIt - 1) * 1000);
    }
  });
};

var sports = [
  {sport: 'basketball', players: 4},
  {sport: 'soccer', players: 12},
  {sport: 'football', players: 23},
  {sport: 'ping pong', players: 3}
];
var sportsList = document.getElementById("sportsList");
for (var i = 0; i < sports.length; i++) {
  var listItem = document.createElement("LI");
  listItem.addEventListener("click", function() {
    alert(this.getAttribute("data-players"));
  });
  var listLabel = document.createTextNode(sports[i].sport);
  listItem.appendChild(listLabel);
  listItem.setAttribute("data-players", sports[i].players);
  sportsList.appendChild(listItem);
};
// var sportsListItems = document.getElementsByTagName("LI");
// for (var i = 0; i < sportsListItems.length; i++) {
//   sportsListItems[i].addEventListener("click", function() {
//       alert(this.getAttribute("data-players"));
//   });
// }
