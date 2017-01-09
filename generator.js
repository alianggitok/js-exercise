var iterator=null,
	step=null;

/*just es6*/
function * generator(){
	console.log('-> step 1');
	yield '1';
	
	console.log('-> step 2');
	yield '2';

	console.log('-> step 3');
	yield 'final';

	return 'finished';
	
};

iterator=generator();

step=iterator.next();//step 1
console.log('\t',step.value,step.done);

step=iterator.next();//step 2
console.log('\t',step.value,step.done);

step=iterator.next();//step 3
console.log('\t',step.value,step.done);

step=iterator.next();//finished
console.log(step.value,step.done);

step=iterator.next();//undefined
console.log(step.value,step.done);

//=======================================================

function * gen(x){
	var y=yield x+2;
	return y;
}

var g=gen(1);
console.log('gen:',g.next());
console.log('gen:',g.next(555));//这一步，通过next()传入的值“555”会替换函数内之前一步的yield，于是y=555，于是输出对象{value:555,done:...}

//======================================================

function * gen2(){
	var v;
	try{
		// v=yes;
		// console.log(v)
		v=yield 'yes';
	}catch(err){
		console.log(err);
	}
	return v;
}

var g2=gen2();
console.log('gen2:',g2.next());
g2.throw('wrong');

