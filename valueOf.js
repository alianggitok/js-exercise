
function a(){
	return 1;
}
b=2;

console.log(a, typeof a);//function
console.log(a(), typeof a());//number
console.log(a().valueOf, typeof a().valueOf);//返回原始类型值：function
console.log(a().valueOf===a);//false

console.log(b.valueOf);
