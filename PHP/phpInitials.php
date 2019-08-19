<!DOCTYPE html>
<html>
  <head>
    
    <title>PHP start</title>
  </head>
  <body>
    <?php //php tags open and closing.
    echo "Hello World!<br>"; // printing hello world.

    $characterName = "Ambuj Kumar"; // creating a variable.
    $characterAge = 22;
    echo "Welcome $characterName! you are $characterAge years old now.<br>";
    $characterName = "Mr. Kumar"; // in php we can change a variable anytime and assign it a new value.(the compiler reads the code from top to bottom)
    echo "Welcome $characterName! you are $characterAge years old now. <br>";
    $phrase = "To be or not to be."; // this variable is an example of a string.
    echo "<br>";
    echo strtoupper($phrase); // this changes the string to whole uppercase same it can be done with the lowercase.
    echo $phrase[3]; // it refers to the [index] and by default the index value starts from 0.
    echo strlen($phrase); // it shows the length of the string.
    echo "<br>";
    echo str_replace("or","rich",$phrase); // this replaces the words in the strings.
    echo "<br>";
    echo substr($phrase,9,6); //this subtracts the string upto which number we want to in this case 9 and print the values upto the given number in this case 2 characters.
    /*
    Mathematical functions -
    abs(-100) - it gives the absolute value of a number. in this case 100.
    pow(2,4) - it gives a raised to the power function basically 2^4.
    sqrt(144) - it gives out the square root of the number like in this case 12.
    max(2,10) - it gives out the maximum number out of 2 and 10 in this case output will be 10.
    min(2,10) - it gives out the minimum number out of 2 and 10 in this case output will be 2.
    round(5.7) - it gives out the round off number in this case 6.
    ceil(2.3) - it will always gives out the upper number no matter what the value is after the decimal. in this case 3.
    floor(2.3) - it will always gives out the lower value no matter what the value is after the decimal. in this case 2.
    */
         ?>
         <form action="phpInitials.php" method="POST"> <!-- there are two methods one is GET and second is POST(get will show the user data on the URL bar and the POST is the secure one)-->
           Name: <input type="text" name="username" placeholder="Username"> <!-- name here is storing the value for reference -->
           <br>
          <input type="number" name="val1" placeholder="Enter first number">
          <input type="number" name="val2" placeholder="Enter second number">
          <br>
          <input type="text" name="color" placeholder="enter colour name">
          <input type="text" name="plural" placeholder="enter Plural Noun">
          <input type="text" name="celebrity" placeholder="enter celebrity name">
          <br>
          <input type="submit"  value="Submit" name="button1">
         </form>
         Your name is
         <form class="f2" action="phpInitials.php" method="POST">
           Oranges: <input type="checkbox" name="fruits" value="oranges">
           Apples: <input type="checkbox" name="fruits" value="apples">
           Bananas: <input type="checkbox" name="fruits" value="bananas">
           <br>
           <label>Here are Ambuj,Rishabh and suhail's result - enter name to know result: </label>
           <input type="text" name="text2" placeholder="enter your name">
           <button type="submit" name="button2">Submit</button>
         </form>
         <?php
         if(isset($_POST["button1"])){
         echo $_POST["username"]; // the $_GET and $_POST is fetching the value from the name, inside the input box and printing the value entered by the user.
          }
          echo "<br>";
          // (creating a MADLIB.)
          if(isset($_POST["button1"])){
          $color = $_POST["color"];
          $pluralNoun = $_POST["plural"];
          $celebrity = $_POST["celebrity"];
          //  echo $_POST["val1"] * $_POST["val2"]; // getting the values from the names from the inputbox using name attribute. the $_GET works only with the submit button.
            echo "Roses are $color. <br> ";
            echo "$pluralNoun are blue. <br> ";
            echo "You are $celebrity. <br> ";
          // (Creating an array)
          $friends = array("Rishabh","Suhail","Dharmender","Akash","Divanshu","Gaurav");
          $friends[5] = "Maheshwari"; // editing value inside the array.
          $friends[6] = "Abhishek"; // adding a new arraay value.
          echo $friends[6]; // printing the array refering the place (starting with 0).
          echo "<br>";
          }
          // (get values from the checkboxes.)
          if(isset($_POST["button2"])){
          $fruits = $_POST["fruits"];
          echo $fruits; // printing value from checkboxes.
          }
          // (associative arrays:)
          if(isset($_POST["button2"])){
          $grades = array("ambuj" => "A+" ,"rishabh" => "B+","suhail" => "B-" ); // key value pairs ambuj is the key and A+ is the value.
          echo  $grades[$_POST['text2']]; // taking the input value from textbox.
          }
          // (functions)
          function saySomething($name,$age){ // starting a function saySomething and in it passing two variables name and age.
            echo "<br>hello $name your age is $age .<br>";
          };
          saySomething("Ambuj",22); // calling the function.
          saySomething("Rishabh",22);
          // (return function.)
          function square($num){
            return $num * $num; // the php compiler reads the return statement and exits out the function and it percieves it as the last command. (return takes the function out)
            echo "Hello world!"; // the compiler never reaches the hello world part.
          }
          echo square(12);
          // (if statement) pritning pass or fail
          $pass = true;
          $fail = false;
          if($pass && !$fail){ // ! this is negation operator which is used to negate the statement and in this case the variable value which is false it turns it into true.
            echo "<br>You passed the test.";
          }
          else {
            echo "you failed the test.<br>";
          }
          // (if else statement) with a condition by comapring values
          function getMax($num1,$num2,$num3){
          if ($num1 >= $num2 && $num1 >= $num3) {
            return $num1;
          }
          elseif ($num2 >= $num1 && $num2 >= $num3) {
            return  $num2;
          }
          else {
            return $num3;
          }
        }
          echo getMax(20,30,40);

            ?>
            <form class="grding" action="phpInitials.php" method="post">
              <input type="text" name="grade" placeholder="enter your grade here.">
              <button type="submit" name="sub">Submit</button>
            </form>
            <?php
            // (switch statement.)
            if(isset($_POST["sub"])){
            $grade = $_POST["grade"]; // passing in the grade from the input box.
            switch ($grade) {
              case "A":
                echo "You did amazing!";
                break;
              case "B":
                echo "You did good!";
                break;
              case "C":
                echo "You can do better.";
                break;
              case "F":
                echo "You FAILED!";
                break;
              default:
                echo "invalid grade";
                break;
            }
          }
          echo "<br>";
            // (while and do-whileloops.)
            $a = 1;
            while ($a <= 6) {
              echo $a;
              $a++;
            }
            echo "<br>";
            $b = 1;
            do{
              echo $b;
              $b++;
            }while ($b > 6);
            // (for loop)
            echo "<br>";
            for ($i=0; $i < 6 ; $i++) {
              echo $i;
            }
            echo "<br>";
            // (objects and classes)
            class Book{ // here we created a class. or we can say a BOOK. or a new datatype.
              var $title; // inside the classes the variables that declared are called attributes
              var $author;
              var $pages;
              function __construct($bTitle,$bAuthor,$bPages){ // the constructor should be declared with double underscore (__) and the exact keyword.
                $this->title = $bTitle;
                $this->author = $bAuthor;
                $this->pages = $bPages;
              }
            }
          /*  $book1 = new Book; // here we created a object or referenced our book to a variable book1
            $book1->title = "Harry Potter";
            $book1->author = "JK. Rowling";
            $book1->pages = 700;
            //echo $book1->author; */
            // (constructors)
            $book2 = new Book("Lord Of the Rings","Tolkin",1200);
            $book3 = new Book("Harry Potter","JK. Rowling",700);
            echo "Book name: $book2->title <br>";
            echo "Author name: $book2->author <br>";
            // (object functions) taking the students gpa to check whether they are eligible to proceed or not.
            class Students{
              var $name;
              var $subject;
              var $gpa;
              function __construct($Name,$Subject,$Gpa){
                $this->name = $Name;
                $this->subject = $Subject;
                $this->gpa = $Gpa;
              }
              function hasHonours(){
                if ($this->gpa >= 5.0) {
                  echo "eligible to proceed.";
                }
                else {
                  echo "can't proceed.";
                }
              }
            }

            $student1 = new Students("vishal","arts",4.0);
            $student2 = new Students("sadhana","medical",7.0);
            $student3 = new Students("bali","commerce",5.0);
            $student4 = new Students("abhishek","science",9.0);
            echo $student4->hasHonours();
            /*session variable*/
            // getters and setters
            echo "<br>";
            class Movies{
              public $title;
              private $review;

              function __construct($mname,$mreview){
                $this->title = $mname;
                $this->review = $mreview;
              }
              function getReview(){
                return $this->review;
              }
              function setReviews($review){
                if ($review == 1 || $review == 2 || $review == 3 || $review == 4 || $review == 5 ) {
                return $this->review = $review;
                }
                else {
                  return "invalid review";
                }
              }
            }
            $avengers = new Movies("avengers",5);
            $faf = new Movies("fast and furious",4);
            $hunter = new Movies("hunter killer",3);
            $ghazi = new Movies("Ghazi",2);
            $triple = new Movies("Triple Frontier",1);
            echo $ghazi->getReview(); //printing out the predefined value.
            echo $ghazi->setReviews(4); // printing out the user defined value.
            echo "<br>";
            /* INHERITANCE */
            class Chef{
              function regular(){
                echo "chef makes regular dishes.<br>";
              }
              function special(){
                echo "Regular chef makes chicken korma.<br>";
              }
            }
            class Punjabichef extends Chef{
              function special(){
                echo "Punjabi chef makes Kadhai chicken.<br>";
              }
            }
            $chef = new Chef();
            $Pchef = new Punjabichef();
            echo $chef->regular();
            echo $Pchef->regular();
            echo $chef->special();
            echo $Pchef->special();
            ?>

  </body>
</html>
