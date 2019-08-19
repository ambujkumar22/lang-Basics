<!DOCTYPE html>
<html lang="en">
<head>
    <title>Practice</title>
</head>
<body>
<form action="practice.php" method="POST">
<input type="text" name = "username" placeholder="enter username"/>
<input type="password" name = "password"  placeholder="enter password" />
<button name="submit">Go for it</button>
<br>
<label>Madlib</label>
<br>
<label>Enter Colour.</label>
<input type="text" name="color" placeholder="color"> <br>
<label>Enter Place.</label>
<input type="text" name="place" placeholder="place"> <br>
<label>Enter Age.</label>
<input type="text" name="age" placeholder="age"> <br>
<button name="b2">Let's play</button>
</form>
    <?php
    if (isset($_POST['submit'])) {
        $username = $_POST['username'];
        $pass = $_POST['password'];
        $upper = ucfirst($username);
        echo "Hello! $upper your password is $pass";
    }
    if (isset($_POST['b2'])) {
        $underwear = $_POST['color'];
        $die = $_POST['place'];
        $babies = $_POST['age'];
        echo "<br>You wear $underwear underwear, will die in $die and have $babies babies.";
    }
    ?>
</body>
</html>