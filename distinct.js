/**
 * @module 去重
 */

var origArray=['A','D','E','B','A','E','A','A','D','E','B','A','E','A','a','f'],
	origObject=[
		{name:'warren',age:18,gender:'male'},
		{name:'warren',age:30,gender:'male'},
		{name:'Mary',age:18,gender:'female'},
		{name:'jack',age:18,gender:'male'},
		{name:'jack',age:18,gender:'male'}
	],
	result1,result2;


/**
 * 返回去重后的内容
 * @param {array} arr - 需要去重的数组
 * @param {string} compareKey - 指定对比的字段（当参数一是一个由对象构成的数组时）
 * @todo 如果是对象间比对需要遍历对象每个键、值
 */
var uniq=function(arr,compareKey){
	var temp=[],
		item=null,
		i,n,prev;

	function compare(compareArray,index,item){
		var prev=index-1,//与前值做比对
			curr=compareArray.length-1,
			previous,
			current,
			n;

		if(compareKey){
			previous=compareArray[prev]?compareArray[prev][compareKey]:undefined;//防止prev<0时“undefined”导致出错
			current=item[compareKey];
			console.log(prev,compareArray[prev],previous,current)
		}else{
			previous=compareArray[prev];
			current=item;
		}
		if(current===previous){//如与前值重复则删除
			// console.log('iterative value:',current,index);
			compareArray.splice(curr,1);
			// console.log('temp:',compareArray);
		}

		/**
		 * @todo 如果是对象间比对需要遍历对象每个键、值
		 */
		if(typeof(item)==='object' && item instanceof Object && !(item instanceof Function)){//确保不是其他类型(js里function、new等也被判断为object)
			for(n in item){
				//...
			}
		}
		
	}

	for(i=0;i<arr.length;i+=1){
		item=arr[i];
		temp.push(item);
		// console.log(item,':',temp)
		for(n=0;n<temp.length;n+=1){
			compare(temp,n,item);
		}
	}

	return temp;
};

result1=uniq(origArray);
result2=uniq(origObject,'name');

console.log('array result:',result1);
console.log('object result:',result2);

