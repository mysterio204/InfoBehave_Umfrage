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
$age = $_POST['age'];
$gender = $_POST['gender'];
$device = $_POST['device'];
$num = $_POST['num'];

//$elements = explode(',', $elements);
$array=json_decode($_POST['result'],true); 



$file = fopen("scores.json","a");

//foreach ($list as $line)
//  {
//  fputcsv($file,explode(',',$line));
//  }

//fputcsv($file,$result);

//fwrite($file,','. PHP_EOL .$result. PHP_EOL .']');


fclose($file); 


$csvfile = fopen("scores.csv","a");
 fwrite($csvfile,$num.','.$device.','.$age.','.$gender);

foreach ($array as $line)
  {
    fwrite($csvfile,','.$line['image'].','.$line['score']);
       


//  fputcsv($csvfile,explode(',',$line));
  }
  fwrite($csvfile,"\n"); 
//fputcsv($file,$result);

//fputcsv($csvfile,implode($array));


fclose($csvfile); 

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
 