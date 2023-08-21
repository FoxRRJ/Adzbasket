<?php

// Create connection
$conn=mysqli_connect('localhost','digitaladz412_teletest','Hs5*Ydc7bxdq','digitaladz412_telegram_test');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
else{
echo "Connected successfully";
}


$input=file_get_contents('php://input');
$token = "5642022677:AAGkBT3WccWl4k0vf0FfWSZWJHuKdkBf_Ag";

$data=json_decode($input);
 $chat_id= $data->message->chat->id;
 $cust_chat= $data->message->text;
 $cust_name = $data->message->chat->first_name;
 $url = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chat_id&&text=Hii $cust_name Welcome to HalooWorld Your CHAT ID:$chat_id";
 
 $query="INSERT INTO `message_history`(`Name`, `chat_id`, `rcvdmsg`) VALUES ('$cust_name','$chat_id','$cust_chat')";
if(mysqli_query($conn,$query)){

echo "order placed";

}
else{
	echo 'Error' .mysqli_error($conn);
}


$ch=curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($ch);
curl_close($ch);

?>