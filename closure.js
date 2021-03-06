// <p>当函数可以<i>记住并访问</i>所在词法作用域（即使函数在作用域之外执行），这时就产生了闭包。</p>
// <p style="text-align:right">——《你不知道的JavaScript》（上）第57页</p>

//闭包创建私有作用域，向外提供公共api

//question: why it output the value is "6" that the variable "i" in the first argument of setTimeout()?
for(var i=1; i<=5; i++){
	console.log(i);//循环体内依序输出1-5
	setTimeout(function timer(){//每循环一次创建一个setTimeout，其中的函数是在循环完成后执行的，即便第二个参数（时间间隔）为0
		console.log('bad:',i);//函数体内的i会得到循环结束后的值，循环结束时i的值为6！（因为“i++”，i<=5会停在6，如果i<5则i为5，这是for语句机制所决定的）
	},i*1000);//函数体外的i仍然由循环语句计算得出（1000-5000）
}//所以，最终会在5秒内以每秒输出一个6来终结

//good
for(var i=1; i<=5; i++){
	(function(n){//将i作为参数n传入这个闭包，就可以让setTimeout如预期的工作了
		setTimeout(function timer(){
			console.log('good:',n);
		},n*1000);
	})(i);//作为参数将i传入函数体
}//最终结果是5秒内顺序输出1-5

//利用ES6的let声明块级作用域的方式，good
;(function(){//为了使用标准模式而包裹的立即执行函数
	'use strict';

	for(let i=1; i<=5; i++){
		setTimeout(function timer(){
			console.log('good(block):',i);
		},i*1000);
	}
}());

