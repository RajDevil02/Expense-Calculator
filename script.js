function goget(){
	var url = "https://script.google.com/macros/s/AKfycbwBPBhs2JVD70kxNhwS_JbrimDtkBnjW6dHK98XGQEq0NXpZ0hIal1iluRadRsDZ200Yw/exec";
	
	fetch(url)
	.then(d => d.json())
	.then(d => {
		monthFilter (d);
		//document.getElementById("app").innerHTML = kk;
		//document.getElementById("app1").value = d;
	});
	
}

function gopost(){
	var url = "https://script.google.com/macros/s/AKfycbwBPBhs2JVD70kxNhwS_JbrimDtkBnjW6dHK98XGQEq0NXpZ0hIal1iluRadRsDZ200Yw/exec";
	
	const daExpense = document.getElementById("dateex").value;
	const drCategory = document.getElementById("cars").value;
	const txAmount = document.getElementById("textAmount").value;
	const txDetail  = document.getElementById("textDetail").value;
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
    body: JSON.stringify({date: daExpense, month: txMonth, category: drCategory, Amount: txAmount, detail: txDetail}) // body data type must match "Content-Type" header
  }).then(d=>{
  	alert("The Response is Submitted");
  });
  
  
  
  
  // parses JSON response into native JavaScript objects
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

function sample(check){
	const daExpense = document.getElementById("dateex").value;
	const drCategory = document.getElementById("cars").value;
	const txAmount = document.getElementById("textAmount").value;
	const txDetail  = document.getElementById("textDetail").value;
	const month = findMonth();

	//alert(daExpense + '\n' + drCategory + '\n' +  txAmount + '\n' + txDetail + '\n' + month);
	
	document.getElementById('app').innerHTML = check;
}

function findMonth(){
	const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	const daExpense = document.getElementById("dateex").value;
	const d = new Date(daExpense);
	let name = month[d.getMonth()];
	return name
}

function monthFilter(response){
	const monthFilter = document.getElementById("cars1").value;
	document.getElementById('app').innerHTML = response[monthFilter][1];
}

function hello() {
	document.getElementById("myForm").reset();
}

document.getElementById("myForm").addEventListener("click", function(event){
  event.preventDefault()
});






	


document.getElementById("submit").addEventListener("click", gopost);




//Details: HTML Page

//Dimension 318*731



