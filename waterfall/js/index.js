class Waterfall{
    constructor(){
        // 等同于构造函数部分
        this.box = document.querySelectorAll(".box");
        this.cont = document.querySelector(".cont");

        this.heightArr = [];
        
        // 1.解决居中问题
        this.init();
    }
    // 等同于构造函数的原型部分
    init(){
        // 计算一行最多放几个：向下取整(屏幕宽 / 单个宽)
        this.clientW = document.documentElement.clientWidth;
        this.maxNum = parseInt(this.clientW / this.box[0].offsetWidth)
        this.cont.style.width = this.maxNum * this.box[0].offsetWidth + "px";

        // 第一行的功能
        this.firstLine();
        // 后面的行要做的事
        this.otherLine();
    }
    firstLine(){
        // 记录第一行所有元素的高度
        for(var i=0;i<this.maxNum;i++){
            this.heightArr.push(this.box[i].offsetHeight);
        }
    }
    otherLine(){
        for(var i=this.maxNum;i<this.box.length;i++){
            // console.log(this.heightArr)
            // var min = Math.min.apply(null,this.heightArr);
            // 获取最小值
            var min = getMin(this.heightArr);
            // 获取最小值的索引
            var minIndex = this.heightArr.indexOf(min);
            // 设置定位
            this.box[i].style.position = "absolute";
            // 根据最小值和对应的索引设置位置
            this.box[i].style.left = minIndex * this.box[0].offsetWidth + "px";
            this.box[i].style.top = min + "px";

            // 重要:改变数组中原来的最小值
            this.heightArr[minIndex] += this.box[i].offsetHeight;
        }
    }
}

new Waterfall();

function getMin(arr){
    // 数组也是对象，对象是引用传递，深浅拷贝，传参是浅拷贝
    var a = [];
    for(var i=0;i<arr.length;i++){
        a.push(arr[i]);
    }
    return a.sort(function(a,b){
        return a-b;
    })[0];
}