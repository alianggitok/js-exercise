function aa(arg1,arg2){}

var bb=function(arg1,arg2,arg3){};

//无论何种方式创建的函数都可以通过 length 属性获得该函数期望传递参数的数量
console.log('function aa\'s arguments length:',aa.length);//2
console.log('function bb\'s arguments length:',bb.length);//3


function getCaller(){
	console.log(getCaller);//获取函数自身
	console.log('\t',getCaller.caller);//可以获得调用该函数的函数
}
(function caller1(){
	getCaller();
})();
(function caller2(){
	getCaller();
})();
