document.write("Hello World!<br>"); // This is just the starting of the JavaScript.
// starting additon.(conditional statements)
var x = 4; //variables storing var
var y = 4;
var total = x + y; // values storing into the variable total

document.write("sum of numbers is:" + total); //printing total
// number is even or odd
if (total % 2 == 0) {
  document.write("<br>even number");
} else {
  document.write("<br>odd number");
}
// number is positive or negative or 0 (ifelse)
if (total > 0) {
  document.write("positive number <br>");
} else if (total < 0) {
  document.write("<br>negative number");
} else {
  document.write("the number is zero.");
}
// the number is even and positive (if else statement)
if (total > 0 && total % 2 == 0) {
  document.write("the number is <b>positive</b> and <b>even</b>");
} else {
  document.write(" <br> last one. <br>");
}
// the number represents the day of the week (switch statement)
var day = 1;
switch (day) {
  case 1:
    document.write("<h1>Monday</h1>");
    break;
  case 2:
    document.write("<h1>Tuesday</h1>");
    break;
  case 3:
    document.write("<h1>Wednesday</h1>");
    break;
  case 4:
    document.write("<h1>Thursday</h1>");
    break;
  case 5:
    document.write("<h1>Friday</h1>");
    break;
  case 6:
    document.write("<h1>Saturday</h1>");
    break;
  case 7:
    document.write("<h1>Sunday</h1>");
    break;
  default:
    document.write("<h1>wrong input</h1>");
}
// multiplication table of 2 (for loop)
for (var t = 1; t <= 10; t++) {
  document.write("2 X " + t + "=" + (2 * t) + "<br>");
}
// printing first 20 even numbers (for loop)
for (var e = 2; e <= 20; e += 2) {
  document.write("<b>" + e + " </b>");
}
document.write("<br>");
// printing frist 20 odd numbers (for loop)
for (var o = 1; o <= 20; o += 2) {
  document.write("<b>" + o + " </b>");
}
//printing first 5 odd numbers (while loop)
document.write("<br>");
var d = 1;
while (d < 10) {
  document.write("<b>" + d + " </b>");
  d += 2;
}
// printing name 4 times (do while loop)
var f = 6
do {
  document.write("<br>Ambuj Kumar");
  f++;
} while (f < 10);
// addition of two numbers (functions)
function add2Numbers(a, b) {
  var addition = a + b;
  return addition;
}
var sum = add2Numbers("<b>Kakashi ", "Hatake</b>");
document.write("<br> Copy Ninja: " + sum);
// global variables are used anywhere in the program (variables)
var dodo = 5

function newFun() {
  document.write("<br>" + dodo + " global variable");
}
newFun();
document.write("<br>" + dodo + " global variable");
// local variables are used inside the functions and cannot be used elsewhere (variables)
function lvar() {
  var docomo = 12;
  document.write("<br>" + docomo + " local variable");
}
lvar();
// week days (array)
var week = ["<br>Monday, ", "Tuesday, ", "Wednesday, ", "Thursday, ", "Friday, ", "Saturday, ", "Sunday."];
week.push(", Holiday");
for (var i = 0; i < 8; i++) {
  document.write(week[i]);
}
// printing out properties of chips (objects)
var chips = {
  chipsBrand: "lays",
  chipsFlavour: "cream and onion",
  chipsPrice: 20,
  propertiesofchips: function() //called a *method* inside an object
  {
    document.write("<br>staging for potato chips."); //return type while printing the function
  }
}
chips.propertiesofchips();
document.write(chips.chipsPrice);
// printing different types of chips and brands using this pointer (condtructors)
function chip(chipsBrand, chipsPrice, chipsFlavour) {
  this.chipsBrand = chipsBrand;
  this.chipsPrice = chipsPrice;
  this.chipsFlavour = chipsFlavour;
  this.difftoc = function() {
    document.write("<br> everyone loves chips and specially");
  }
}
var b1 = new chip("lays", "20", "cream and onion");
var b2 = new chip("bingo", "25", "masala chaska");
var b3 = new chip("dorittos", "40", "cheesy chops");
b2.difftoc();
document.write(" " + b2.chipsFlavour + " and " + b3.chipsFlavour + " from " + b1.chipsBrand + " and " + b2.chipsBrand);
// deleting and including new vslues to the object and defining the types (objects pt.2)
document.write("<br>" + typeof(chips));
delete chips.chipsFlavour; // deleted the property chipsflavour from the object
chips.chipsRating = "5"; //added value to the chips
document.write("<br>" + chips.chipsRating);
document.write("<br>" + chips.chipsFlavour + "<br>");
// (DOM manipulation) showing see me on button click.
function buttonClick() {
  alert("see me!");
}
// changing the text on button click. (DOM manipulation)
function buttonClick2() {
  document.getElementById("textclick").innerHTML = "Text Changed";
}
// taking input from the user(DOM manipulation)
function inputfromuser() {
  var str = document.getElementById("alias").value;
  alert("username is " + str);
}
// verify the user (DOM manipulation)
function verify() {
  var user = document.getElementById("alias").value;
  var passw = document.getElementById("pass").value;
  if (user == "ambuj" && passw == "kumar") {
    alert("The user " + user + " is verified.");
  } else {
    alert("The user is invalid.");
  }
}
// determine the user is a M/F (DOM manipulation)
function radioCheck() {
  var rad1 = document.getElementById("rad1");
  var rad2 = document.getElementById("rad2");
  if (rad1.checked == true) {
    alert("the user is a " + rad1.value);
  } else if (rad2.checked == true) {
    alert("the user is a " + rad2.value);
  } else {
    alert("you have to select something");
  }
}
// selecting value from selectbox (DOM manipulation)
function selectbox() {
  var sim = document.getElementById("simple");
  alert("the user is from: " + sim.options[sim.selectedIndex].value);
}
// using getElementsByTagName() (DOM manipulation) changing style
function changestyle() {
  var para = document.getElementsByTagName("p");
  for (var i = 0; i < para.length; i++) {
    para[i].style.fontStyle = "italic";
  }
}
// using getElementsByClassName() (DOM manipulation) changing color
function changecolor() {
  var para = document.getElementsByClassName("cn");
  for (var i = 0; i < para.length; i++) {
    para[i].style.color = "red";
  }
}
// changing size of the text using mousehover.(onmouseover)
function changesize() {
  document.getElementById("mouseover").innerHTML = "Text changed.";
}
// changing size of the text using mousehover.(onmouseout)
function changeback() {
  document.getElementById("mouseover").innerHTML = "Mouse hover size change.";
}
// must enter something condition (form validation)
function validate() {
  var username = document.getElementById("username1");
  var password = document.getElementById("password1");

  if (username.value.trim() == "") {
    username.style.border = "solid 1px red";
    document.getElementById("invuser").style.visibility = "visible";
    return false;
  } else if (password.value.trim() == "") {
    password.style.border = "solid 1px red";
    document.getElementById("invpass").style.visibility = "visible";
    return false;
  } else if (password.value.trim().length < 5) {
    password.style.border = "solid 1px red";
    document.getElementById("morepass").style.visibility = "visible";
    return false;
  } else {
    return true;
  }
}
// @gmail not found (regular expression)
function reg() {
  var regular = document.getElementById("username2").value;
  var regex = /@gmail.com/i; // i is used as a flag for INSENSITIVITY of the regular expression.
  if (regex.test(regular)) { // inbetween / and / we can also specify the range also for ex. a-z and 0-9 in the []brackets.
    username2.style.border = "solid 2px green";
    document.getElementById("nocomp").style.visibility = "hidden";
  } else {
    username2.style.border = "solid 1px red";
    document.getElementById("nocomp").style.visibility = "visible";
  }
}
/*
\d - match any digit which is equal to [0-9]
\w - match any word charachter which is (a-z,A-Z,0-9 & _)
\s - match white space cjaracter which is (tabs or spaces)
\t - match a tab only
 */
// first character has to be 5-9 | next 8 characters have to be inbetween a-z and the last character is 0.(number validation in regular expression)
function numberval() {
  var specific = document.getElementById("stext").value;
  var regularex = /^[5-9][a-z]{8}0$/i; // ^ is used for starting chacters restriction and $ sign is for after last number restriction.
  if (regularex.test(specific)) {
    stext.style.border = "solid 2px green";
    document.getElementById("invalidchar").style.visibility = "hidden";
  } else {
    stext.style.border = "solid 2px red";
    document.getElementById("invalidchar").style.visibility = "visible";
  }
}
// email validation (regular expression)
/*
+ is used in regular expressions just after some expression to repersent that it does not only allpies to the first letter.
? is used in regular expression just after some expression to tell the browser that the expession is an optional expression.
() are used to contain an expression or a group of expressions.
*/
function emailval() {
  var Email = document.getElementById("Emailtest").value;
  var regularcheck = /^([a-z A-z 0-9\.\_]+)@([[a-z A-z 0-9]{2,10}).([a-z]{2,5})([.])([a-z]{2,5})?$/; // forward slash is used so that the dot(.) cannot be taken as a random character or wild-card.
  if (regularcheck.test(Email)) {
    Emailtest.style.border = "solid 2px green";
    document.getElementById("invalidmail").style.visibility = "hidden";
  } else {
    Emailtest.style.border = "solid 2px red";
    document.getElementById("invalidmail").style.visibility = "visible";
  }
}
/*
setTimeout() - allows you to execute statements ONCE after an interval.
clearTimeout() - method clears a timer set with s setTimeout() method.
setInterval() - allows you to execute statements REPEATEDLY after an interval.
clearInterval() - method clears a timer set with s setInterval() method.
*/
// (timing functions)
var stp = 0; //global variable
var sec = 2; // global variable
function startTimer()
{
  // var strt= document.getElementById("txttimer").innerHTML = "2 seconds have passed.";
  document.getElementById("txttimer").innerHTML = sec+" seconds have passed.";
  sec+=2;
}
function start()
{
  // stp = window.setTimeout(startTimer,2000);
    stp = window.setInterval(startTimer,2000); // window is an object.
}
function stop()
{
  // window.clearTimeout(stp);
  window.clearInterval(stp);
}
// fade in and fade out effect (timing function)
var opacity = 0;
var ID = 0;
function textio()
{
    ID = setInterval(fadeOut,20);
}
function fadeOut()
{
  var text = document.getElementById("textFade");
  opacity = Number(window.getComputedStyle(text).getPropertyValue("opacity"));
  if(opacity>0){
    opacity = opacity - 0.1;
    text.style.opacity = opacity;
  }
  else {
    clearInterval(ID);
  }
}

function textoi()
{
    ID = setInterval(fadeIn,20);
}
function fadeIn()
{
  var text = document.getElementById("textFade");
  opacity = Number(window.getComputedStyle(text).getPropertyValue("opacity"));
  if(opacity<1){
    opacity = opacity + 0.1;
    text.style.opacity = opacity;
  }
  else {
    clearInterval(ID);
  }
}
// expand and shrink text on mouseover (timing function)
var number = 10;
var difference = 1;
var funID = 0;
function increase()
{
  clearInterval(funID);
  funID = setInterval(expand,30);
}
function expand()
{
  if(number<20)
  {
  number = number + difference;
  document.getElementById("expink").style.fontSize = number+"px";
  console.log(number);
  }
  else {
    clearInterval(funID);
  }
}
function decrease()
{
  clearInterval(funID);
  funID = setInterval(shrink,30);
}
function shrink()
{
  if(number>10)
  {
  number = number - difference;
  document.getElementById("expink").style.fontSize = number+"px";
  console.log(number);
  }
  else {
    clearInterval(funID);
  }
}
/*--------------------------THE END------------------------------*/
