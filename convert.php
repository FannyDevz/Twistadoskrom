<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $inputText = $_POST["inputText"];
    $inputText = str_replace(array('https://', 'http://', 'www.','(.)','http','https',':','(',')','//','dos','krom','twista'), '', $inputText);

    $pattern = '/^(.+?)\//';
    preg_match($pattern, $inputText, $matches);
    if (count($matches) == 2) {
        $randomString = $matches[1];
        $twitterUrl = str_replace("$randomString/", "https://twitter.com/", $inputText);
        
        echo $twitterUrl;
    } else {
        echo "Input tidak valid.";
    }
}
?>
