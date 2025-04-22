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

function saveTravelDetails(travelPoint, detail){

	var url = "https://script.google.com/macros/s/AKfycbwBPBhs2JVD70kxNhwS_JbrimDtkBnjW6dHK98XGQEq0NXpZ0hIal1iluRadRsDZ200Yw/exec";
	
	const daExpense = new Date().toISOString().slice(0,10);
	const drCategory = "Travel";
	const txAmount = document.getElementById(travelPoint).value;
	const txDetail  = detail;
	const spentLocation = "Bangalore"
	const mandatoryCheck = "Yes";
	const txMonth = findMonth();
	
	fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({date: daExpense, month: txMonth, category: drCategory, mandatory: mandatoryCheck, Amount: txAmount, location: spentLocation,detail: txDetail}) // body data type must match "Content-Type" header
  }).then(d=>{
  	alert("The Response is Submitted");
  });
  
  
  
  
  // parses JSON response into native JavaScript objects

}

function findMonth(){
	const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	//const daExpense = document.getElementById("dateex").value;
	const d = new Date();
	let name = month[d.getMonth()];
	return name
}