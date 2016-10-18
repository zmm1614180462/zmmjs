class Hello {
    a(){
        console.log('你好');
    }
}

console.log('你好');
var dataT = null;
$http.get().then(function (data) {
    dataT=data;
    console.log('成功回调函数,data是返回的数据')
},function (error) {
    console.log('失败回调函数,error错误类型')
})