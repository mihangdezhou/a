<?php

    //模拟从mysql获取到的数据
    $u = "admin";
    $p = "13456";

    $user = @$_REQUEST["user"];
    $pass = @$_REQUEST["pass"];

    //1.php返回数据的格式
    if($u == $user && $p == $pass){
        echo '{"msg":"成功","statu":0,"userMsg":{}}';
    }else if($u == $user && $p != $pass){
        echo '{"msg":"密码错误","statu":1}';
    }else{
        echo '{"msg":"该用户不存在","statu":2}';
    }

?>