
var buttonText = document.getElementById("loadtext");
var targetText = document.getElementById("text");

// function xhrGrab(url, outputter) {
//   var request = new XMLHttpRequest();
//   request.addEventListener("load", outputter);
//   request.open("GET", "./text.txt");
//   request.send();
//
// }

buttonText.addEventListener("click", function() {
  var request = new XMLHttpRequest();
  request.addEventListener("load", output);
  request.open("GET", "./text.txt");
  request.send();
  function output() {
    targetText.innerHTML = this.responseText;
  }
});

var buttonHtml = document.getElementById("loadhtml");
var targetHtml = document.getElementById("html");

buttonHtml.addEventListener("click", function() {
  var request = new XMLHttpRequest();
  request.addEventListener("load", output);
  request.open("GET", "./html.html");
  request.send();
  function output() {
    targetHtml.innerHTML = this.responseText;
  }
});

var buttonJson = document.getElementById("loadjson");
var targetJson = document.getElementById("json");

buttonJson.addEventListener("click", function() {
  var request = new XMLHttpRequest();
  request.addEventListener("load", output);
  request.open("GET", "./animals.json");
  request.send();
  function output() {
    var resultString = "";
    var results = JSON.parse(this.responseText);
    for (var type in results) {
      resultString += "<h3>" + type + "</h3><ul>";
      for (var i = 0; i < results[type].length; i++) {
        resultString += "<li>" + results[type][i] + "</li>";
      }
      resultString += "</ul>";
    }
    targetJson.innerHTML = resultString;
  }
});
