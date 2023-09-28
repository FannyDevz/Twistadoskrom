<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $inputText = $_POST["inputText"];
    
    echo $inputText;
}
?>
