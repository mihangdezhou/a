function ajaxGet(url,cb,data){
    data = data || {};
    //`${属性}=${属性值}`是简写的一种方式  这是全写属性 +  "="  + 属性值 + "&"
    var str = "";
    for(var i in data){
        str += `${i}=${data[i]}&`;
    }
    var d = new Date();//
    url = url + "?" + str + "__sui=" + d.getTime();

    var xhr = new XMLHttpRequest();
    xhr.open("get",url,true);//true可以省略不写，默认就是true
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            cb(xhr.responseText)
        }
    }
    xhr.send();
}

function ajaxPost(url,cb,data){
    data = data || {};
    var str = "";
    for(var i in data){
        str += `${i}=${data[i]}&`;
    }

    var xhr = new XMLHttopRequest();
    xhr.open("post",url,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            cb(xhr.responseText);
        }
    }
    xhr.setRequestHeader("Content-Type","applicatioin/x-www-form-urlencoded");
    xhr.send(str);
}

// function jsonp(url,cb,data){
//     var str = "";
//     for(var i in data){
//         str += `${i}=${data[i]}&`;
//     }
//     url = url + "?" + str.slice(0,str.length-1);

//     var script = document.createElement("script");
//     script.src = url;
//     document.body.appendChild(script);
    
//     window[data[data.columnName]] = function(res){
//         cb(res);
//     }
// }


function jsonp(url,callback,data){
    var str = "";
    for(var i in data){
        str += `${i}=${data[i]}&`;
    }
    url = url + "?" + str.slice(0,str.length-1);

    var script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);

    window[data[data.columnName]] = function(res){
        cb(res);
    }
}



















