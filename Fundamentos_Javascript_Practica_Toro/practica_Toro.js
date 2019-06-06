
function rgb(cad){
	var ans = "";
	var n = cad.split(",");
	var num = n.map(n => Number(n));
	for(var i in num){
		let div = num[i]/16;
		let ent = Math.trunc(div);
		let res = num[i]%16;
		if(ent < 10){
			ans += ent;
		}else{
			ans += ent.toString(16).toUpperCase();
		}

		if(res < 10){
			ans += res;
		}else{
			ans += res.toString(16).toUpperCase();
		}
	}
	console.log(ans);
	return ans;
}

function hexa(cad){
	var ans = [];
	for(var i = 1; i < 6; i+=2){
		var tmp = [];
		for(var j = i; j >= i-2; j--){
			tmp.push(parseInt(cad[j],16));
		}
		ans.push(tmp[0] + tmp[1]*16);
	}
	console.log(ans);
	return ans;
}

function main(){
	var cad1 = document.getElementById("enterColorCodeRGB").value;
	var cad2 = document.getElementById("enterColorCodeHexa").value;
	var n1 = cad1.length;
	var n2 = cad2.length;
	if(n1 != 0){
		var hexa = rgb(cad1);
		document.getElementById("enterColorCodeHexa").value = hexa;
	}else{
		document.getElementById("enterColorCodeRGB").value = hexa(cad2);
	}
	var hashtag = "#";
	hashtag += hexa;
	document.getElementById("color").style.backgroundColor = hashtag;
	document.getElementById("colour").style.backgroundColor = hashtag;
}

function color(){
	var cad = document.getElementById("enterColorCodeHexa").value;
	var hashtag = "#";
	hashtag += cad;
	document.getElementById("color").style.backgroundColor = hashtag;
	document.getElementById("colour").style.backgroundColor = hashtag;
}

