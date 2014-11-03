<?php
	
	$request_body = file_get_contents('php://input');
	$data = json_decode($request_body);
	
	$email = trim($data->params->email);
	$password = trim($data->params->password);
	
	//need to implement with my sql
	$status = ($email =="narasinghsays@gmail.com" && $password =="narasingh") ? 1 : 0;
	
	echo $status;
	
?>