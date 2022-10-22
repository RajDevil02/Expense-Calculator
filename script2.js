function OverallData(){
	var url = "https://script.google.com/macros/s/AKfycbytF6F3bhmYldaOBrbAeZGbE-dQ-VTfmKhClQJ8-9tS_yVhvZhrhpYtVpeFdG105hMWjA/exec";
	
	fetch(url)
	.then(d => d.json())
	.then(d => {
		mixedCal(d);
		//document.getElementById("app").innerHTML = kk;
		//document.getElementById("app1").value = d;
	}).catch((err) => {
    alert(err)
});
	
}

function mixedCal(response){
	var month = document.getElementById("months1").value;
	var type = document.getElementById("categoryType1").value;
	var sumVal = [];
	for (var i=0; i<response.length; i++){
		if (response[i][0]==month && response[i][1]==type){
			sumVal.push(response[i][2]);
		}
	}
	var getSum = sumAll(sumVal)
	document.getElementById('mix_text').value = getSum;
	alert("Completed");
}

function sumAll(listinput){
	var sum = 0;
	for (var i = 0; i<listinput.length; i++){
		sum = sum + listinput[i];
	}
	return sum;
}

function greetings(){

	const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "Good Morning";
} else if (time < 16) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}
document.getElementById("greet").innerHTML = greeting;

}

function onlyMonth(){
	var url = "https://script.google.com/macros/s/AKfycbwBPBhs2JVD70kxNhwS_JbrimDtkBnjW6dHK98XGQEq0NXpZ0hIal1iluRadRsDZ200Yw/exec";
	
	fetch(url)
	.then(d => d.json())
	.then(d => {
		monthFilter (d);
		//document.getElementById("app").innerHTML = kk;
		//document.getElementById("app1").value = d;
	}).catch((err) => {
    alert(err)
});
	
}

function monthFilter(response){
	var month = document.getElementById("onMonth").value;
	var count = 2;
	for (var i=0; i<response.length; i++){
		if (response[i][0]==month){
			count=i;
			break;
		}
		else{
			count=count+1;
		}
	}
	alert("Value returned");
	document.getElementById('mon_text').value = response[count][1];

}

function onlyCategory(){
	var url = "https://script.google.com/macros/s/AKfycbyeCfPKIuffAUkIg0xO_6jtlY9i89lLK26u0REvRC0krSGwHWmCv8_qFtkKQxdlkFlB/exec";
	
	fetch(url)
	.then(d => d.json())
	.then(d => {
		categoryFilter (d);
		//document.getElementById("app").innerHTML = kk;
		//document.getElementById("app1").value = d;
	}).catch((err) => {
    alert(err)
});
	
}

function categoryFilter(response){
	var category = document.getElementById("onCategoryType").value;
	var count = 0;
	for (var i=0; i<response.length; i++){
		if (response[i][0]==category){
			count=i;
			break;
		}
		else{
			count=count+1;
		}
	}
	alert("Value returned");
	document.getElementById('cate_text').value = response[count][1];

}



document.getElementById("mix_wise").addEventListener("click", OverallData);
document.getElementById("mon_wise").addEventListener("click", onlyMonth);
document.getElementById("cate_wise").addEventListener("click", onlyCategory);