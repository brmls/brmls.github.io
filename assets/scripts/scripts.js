//typewriter created by Ttameem Safi
// source: htpps://github.com/tameemsafi/typewriterjs
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:4
});

typewriter.typeString('hi there!')
    .pauseFor(600)
    .deleteAll()
    .pauseFor(600)
    .typeString("it's lovely to meet you.")
    .pauseFor(600)
    .deleteAll()
    .typeString('my name is brenda.')
    .pauseFor(600)
    .deleteAll()
    .typeString("i'm a recent grad from uc santa barabra (go gauchos!).")
    .pauseFor(600)
    .deleteAll()
    .typeString("i earned a b.s. in statistics and data science.")
    .pauseFor(600)
    .deleteAll()
    .typeString("take a look at some of my work!")
    .pauseFor(600)
    .deleteAll()
    .typeString("thanks for stopping by :) ")
    .pauseFor(600)
    .deleteAll()
    .start();


// when the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-70px";
  }
}

// project section: filter button
// source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("each-project");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    console.log(element.className, arr2[i]);
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// add active class to the current button (highlight it)
var btnContainer = document.getElementById("button-section");
var btns = btnContainer.getElementsByClassName("filter-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    console.log(current);
  });
}
