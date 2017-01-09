var inputDate=new Date(process.argv[2]);

console.log(inputDate);

function format(d){//格式化
	var year=d.getFullYear(),
		month=d.getMonth()+1,//月以0作为1月，要显示为1的话这里得+1
		day=d.getDate();
	return year+'-'+month+'-'+day;
};
function getFirstMonthDayDate(d){//当月获取第一天
	var newDate=d.setDate(1);
	return new Date(newDate);
}
function getLastMonthDayDate(d){//获取当月最后一天
	var nextMonth=d.getMonth()+1,//这里只是通过加法计算下一个月而非显示，所以只+1
		nextMonthDate=new Date(d.setMonth(nextMonth));
	return new Date(nextMonthDate.setDate(0));//上个月的最后一天，最终获得的也就是想要的当月最末一天
}


var firstMonthDayDate=getFirstMonthDayDate(inputDate),
	lastMonthDayDate=getLastMonthDayDate(inputDate);

console.log(format(firstMonthDayDate),format(lastMonthDayDate));
