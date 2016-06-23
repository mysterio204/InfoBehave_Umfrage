<?php
//$list = array
//(
//"Peter,Griffin,Oslo,Norway",
//"Glenn,Quagmire,Oslo,Norway",
//);
$lines = file('scores.json'); 
$last = sizeof($lines) - 1 ; 
unset($lines[$last]); 

// write the new data to the file 
$fp = fopen('scores.json', 'w'); 
fwrite($fp, implode('', $lines)); 
fclose($fp);

//$list=$_POST['result_arr'];
$result = $_POST['result'];
//$elements = explode(',', $elements);
$array=json_decode($_POST['result']); 



$file = fopen("scores.json","a");

//foreach ($list as $line)
//  {
//  fputcsv($file,explode(',',$line));
//  }

//fputcsv($file,$result);

fwrite($file,','. PHP_EOL .$result. PHP_EOL .']');


fclose($file); 

// Read the file

//$fileContents = file('scores.json');
//
//// Remove first line
//
//array_shift($fileContents);
//
//// Add the new line to the beginning
//
//array_unshift($fileContents, '[');
//
//// Write the file back
//
//$newContent = implode("", $fileContents);
//
//$fp = fopen('scores.json', "w+");   // w+ means create new or replace the old file-content
//fputs($fp, $newContent);
//fclose($fp);





?>
 