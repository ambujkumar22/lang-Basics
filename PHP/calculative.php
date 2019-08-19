<!DOCTYPE html>
<html >
  <head>
    <title></title>
  </head>
  <body>
    <form name="price">
    enter: &nbsp <input type="number" name="numberofpeople">
  <p><input type="radio" id="arrangement_size1" name=arrangement_size value="50" style="height: 30px; width: 30px" checked="checked">option 1</p>
  <p><input type="radio" id="arrangement_size2" name=arrangement_size value="75" style="height: 30px; width: 30px">option 2</p>
  <p><input type="radio" id="arrangement_size3" name=arrangement_size value="125" style="height: 30px; width: 30px">option 3</p>
  <input type="text" name="totalSum" id="totalSum" value="" size="2" readonly="readonly">
  <input type="number" name="lala" id="type1" value="">
  <button type="button" name="button" onclick="func()">click</button>
  <br>
  <input type="text" name="text3" id="text3">
  </form>
<?php
  $form = "laaaaaaaaaaaaaaaa <br> laaaaaaaaaaaaa <br> laaaaaaaaaaaaaaaaaaaaaaa";
  echo $form;
 ?>
<script type="text/javascript">
  var rads = document.getElementsByName("arrangement_size");
  var input = ~~document.getElementsByName("numberofpeople").value;
  for (var i=0;i<rads.length;i++) {
    rads[i].onclick=function() {
      document.getElementsByName("totalSum")[0].value = (this.value*3).toFixed(2);
      //alert(input);
    }
    if (rads[i].checked) rads[i].click();
  }
  function func(){
 var type1 = document.getElementById("type1");
// var type2 = document.getElementById("type2");

 var arrangement_size1 = document.getElementById("arrangement_size1");
 var arrangement_size2 = document.getElementById("arrangement_size2");
 var arrangement_size3 = document.getElementById("arrangement_size3");

 var todo;
 var answer = document.getElementById("text3");

 if (arrangement_size1.checked==true) {
    todo = parseFloat(type1.value)*parseFloat(arrangement_size1.value);
    answer.value = todo;
    alert("wrong input");
 } else if (arrangement_size2.checked==true) {
   todo = parseFloat(type1.value)*parseFloat(arrangement_size2.value);
   answer.value = todo;
   alert("wroput");
 }
 else if (arrangement_size3.checked==true) {
   todo = parseFloat(type1.value)*parseFloat(arrangement_size3.value);
   answer.value = todo;
   alert("wrt");
 }
 else {
   alert("wrong input");
 }
}
</script>

</html>
