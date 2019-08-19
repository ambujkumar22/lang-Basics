<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>login test</title>
  </head>
  <body> 
    <?php
      include "process.php";
     ?>
    <h1>Log In</h1>
    <form class="" action="process.php" method="post">
      <label> Name: </label>
      <input type="text" name="username" placeholder="Enter your ID">
      <br>
      <label> Password: </label>
      <input type="password" name="password" placeholder="Enter your password">
      <br>
      <button type="submit" name="save">Login</button>
    </form>
  </body>
  <script type="text/javascript" src="D:\Designing\Tools\jquery.js">

  </script>
</html>
