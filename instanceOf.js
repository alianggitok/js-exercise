//constructor
var MyConstructor=function(args){
	this.args=args;
	this.print=function(){
		console.log(this);
	};
};

var newThings=new MyConstructor('a');

console.log(MyConstructor instanceof Object);//true, 任何情况下构造函数都是一个对象，因为他们都继承自Object()构造函数
console.log(MyConstructor instanceof Function);//true, MyConstructor() is Function()'s instance, Function() is a native constructor
console.log(newThings instanceof MyConstructor);//true, newThings() is MyConstructor()'s instance

var thingsA='some thing';
console.log(thingsA instanceof String);//false, 因为instanceof只适用于用构造函数创建的复杂对象或实例
var thingsB=new String('some thing');
console.log(thingsB instanceof String);//true
