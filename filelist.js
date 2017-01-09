var fs=require('fs');

function getFilesSync(path,filterRegex){
	var files=fs.readdirSync(path),
		nFiles=[],
		n,len;

	if(!files&&files.length<1){
		console.log('nothing');
		return [];
	}

	if(filterRegex){
		for(n=0,len=files.length;n<len;n++){
			if(filterRegex.test(files[n])){
				nFiles.push(files[n]);
			}
		}
	}else{
		nFiles=files;
	}

	return nFiles;
}

var list=getFilesSync('.',/\.js$/);
console.log(list);
