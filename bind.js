function func(name,id){
	console.log(name,id,this);
}
var obj='Look here';

var a=func.bind(obj,'bind','-->');//返回函数，不执行
a();

var b=func.call(obj,'call','-->');//执行