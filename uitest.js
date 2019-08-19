$(document).ready(function(){

//interacting with accordion
  $(".accord").accordion({
    collapsible:true, //by default false.
    animate:200, //time period of the animation in milliseconds.
    event:"mouseover", // click can also be set as an event.
    active:0, // active sets on default which heading will open.
    heightStyle:true, // it is used to set the height of the text area according to the text plus this is case sensitive and by default is set to false.
    icons:{header:"ui-icon-plus",activeHeader:"ui-icon-minus"} // this changes the appearence of the icons and activeHeader is the open tab and header is closed one.
  });
  // using autocomplete widget
  var games = ["call of duty","mafia","tomb raider","assassins creed","most wanted","anthem","PUBG","motocross","motoGP","SMASH","battlefield"];
  $("#autocomplete").autocomplete({
    source: games, // to fetch the array.
  },
  {
    autoFocus: 1, // to highlight the recommendation.
    delay: 0, // delay to showup the suggestions.
    minLength: 2, // this is usually set to show suggestions after 2 characters.
  });
  // using datepicker widget format (MM/DD/YYY)
  $("#datetime").datepicker({
    numberOfMonths:1, //to show the number of months side by side.
    changeYear:true, // to change the year on the same plane. (boolean value)
    changeMonth:true, // to change the month on the same plane. (boolean value)
    showWeek:true, //to show the week number on the same plane. (boolean value)
    showOtherMonths: true, // to show other days of the months. (boolean value)
  }); 
  // using messagebox as interative UI in the website.
  $("#messagebox").dialog({
    title: "messagebox", // sets the visible title of the messagebox.
    resizable: false, // boolean value by default false.
    draggable: true, // by default the value is true.
    modal: true, // the user cannot click on the web page until the messagebox is closed.
    height: 300,
    width: 300,
    buttons:[{ // to add custom buttons.
      text: "close",
      click: function(){
        $(this).dialog("close");
      }
    },{
      text: "Ok",
      click: function(){
        alert("hello!");
      }
    }]
  });
});
/*--------------------------The End------------------------------*/
