class Waterfall{
    constructor(){
        this.box = document.querySelectorAll(".box");
        this.cont = document.querySelector(".cont");

        
        this.clientH = document.documentElement.clientHeight;
        this.clientW = document.documentElement.clientWidth;

        this.url = "http://localhost/waterfall/data/data.php";

        this.heightArr = [];
        
        this.init();
        
        // 1.添加滚动事件
        this.addEvent();
    }
    init(){
        this.maxNum = parseInt(this.clientW / this.box[0].offsetWidth)
        this.cont.style.width = this.maxNum * this.box[0].offsetWidth + "px";

        this.firstLine();
        this.otherLine();
    }
    firstLine(){
        for(var i=0;i<this.maxNum;i++){
            this.heightArr.push(this.box[i].offsetHeight);
        }
    }
    otherLine(){
        for(var i=this.maxNum;i<this.box.length;i++){
            var min = Math.min.apply(null,this.heightArr);
            var minIndex = this.heightArr.indexOf(min);

            this.box[i].style.position = "absolute";
            this.box[i].style.left = minIndex * this.box[0].offsetWidth + "px";
            this.box[i].style.top = min + "px";

            this.heightArr[minIndex] += this.box[i].offsetHeight;
        }
        this.lastTop = this.box[this.box.length-1].offsetTop;
    }
    load(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            // console.log(that.res);
            // 3.渲染新结构
            that.display();
        })
    }
    addEvent(){
        var that = this;
        onscroll = function(){
            var scrollT = document.documentElement.scrollTop;
            if(scrollT > that.lastTop - that.clientH - 200){
                // 2.请求数据
                that.load();
            }
        }
    }
    display(){
        // console.log(this.res);
        // 4.拼接新结构
        var str = "";
        for(var i=0;i<this.res.length;i++){
            str += `<div class="box">
                        <div class="imgbox">
                            <img src="${this.res[i].img}" alt="">
                        </div>
                    </div>`;
        }
        // 5.填充新结构
        this.cont.innerHTML += str;

        // 6.初始化页面
        this.heightArr = [];
        this.box = document.querySelectorAll(".box");
        this.firstLine();
        this.otherLine();
    }
}

new Waterfall();

// 作业：
    // 节省性能
    // 只重新渲染新架构的结构

