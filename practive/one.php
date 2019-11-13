<?php
    $link = @new mysqli("localhost","root","root","a");
    if($link -> connect_error){//若他为真则没链上
        echo $link -> connect_error;
        echo "no";//如果没链接上数据库显示此代码
    }else{
        echo "coonect yes";//如果链接上数据库了就显示此代码，
    }

    echo "<br>";
    $str = 'INSERT aa (name,age,sex) VALUES ("小婷",18,"女")' ;    
    $ai = $link->query($str);

    $gai = 'update aa set name="王" where id=4';
    $gaiD = $link->query($gai);

    $shan = 'delete from aa where name="小婷"';
    $shanC = $link->query($shan);

?>