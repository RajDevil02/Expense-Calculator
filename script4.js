/*To fetch the data from the Scripts*/
function allDetails(){
	var url = "https://script.google.com/macros/s/AKfycbzFuxcwsH7du38xEDXVL7f93102cWfnx7vVxiwkZXZScqbTncKMLp0BCEvDZz3URNbD/exec";
	fetch(url)
	.then(d => d.json())
	.then(d=>{dateUrl(d)});

	

}

/*To get the correct date format and send*/
function dateUrl(res){
	for (var i=0;i<res.length;i++){
		var resDate = new Date(res[i][0]);
		resDate.setDate(resDate.getDate());
		var finalDate = resDate.toLocaleString("fr-CA").split(" ")[0];
		res[i][0] = finalDate;
		
	}

	getDate1(res);

	//tableLoop(res);
	//console.log(res.length)

}

/*To compare the dates for the given range and send it to the Table structure function*/

function getDate1(res){
	var from_Date = document.getElementById("fromDate").value;
	var to_Date = document.getElementById("toDate").value;
	
	var object_From = Date.parse(new Date(from_Date)) ;
	var object_To = Date.parse(new Date(to_Date));

	var date_Difference = ((object_To) - (object_From))/86400000;

	var final_lists = [];

	for (var i=0;i<=date_Difference;i++){
		var compare1 = object_From + i*86400000;
		for (var j=0; j<res.length;j++){
			var compare2 = Date.parse(res[j][0]);
			if (compare1==compare2){
				final_lists.push(res[j]);

			}
		}
	}
	
tableLoop(final_lists);
sumInputs(final_lists)
}

/*To get the inputs and display in the table structure*/

function tableLoop(k){
	var parent = document.getElementById("rangeSection");
	var replacePara = document.getElementById("para2");
	var createPara = document.createElement('p');
		
	var table = document.createElement('table'), tr, td, row, cell,head;
	var thr = document.createElement('tr');
	var hello = ['Date','Month','Expense Category','Amount', 'Details'];
	for (row = 0; row < hello.length; row++) {
    	th = document.createElement('th');
	    thr.appendChild(th);
	    th.innerHTML = hello[row];
    }
    table.appendChild(thr);

	for (row = 0; row < k.length; row++) {
    	tr = document.createElement('tr');
    	for (cell = 0; cell < k[row].length; cell++) {
	        td = document.createElement('td');
	        tr.appendChild(td);
	        td.innerHTML = k[row][cell];
    }
    table.appendChild(tr);
    table.setAttribute("id","para2")
}

parent.replaceChild(table,replacePara);

}

/*----------------------------------------------------Greetings--------------------------------------------------------*/
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

/*--------------------------------------------------------For Month Wise ----------------------------------------------------*/
function OverallData(){/* This is same as allDetails() function*/
			var url = "https://script.google.com/macros/s/AKfycbzFuxcwsH7du38xEDXVL7f93102cWfnx7vVxiwkZXZScqbTncKMLp0BCEvDZz3URNbD/exec";//"All Details Script"
	
			fetch(url)
			.then(d => d.json())
			.then(d => {
				monthFilter(d);
				//document.getElementById("app").innerHTML = kk;
				//document.getElementById("app1").value = d;
			}).catch((err) => {
		    alert(err)
		});

	
	
}

function monthFilter(allDetails){
	var month = document.getElementById("onMonth").value;
	var filteredDetails = [];
	for (var i=0;i<allDetails.length;i++){
		if (allDetails[i][1]==month){
			filteredDetails.push(allDetails[i]);
		}
	}
	tableLoop(filteredDetails);
	sumInputs(filteredDetails)

}

/*------------------------------------------Amount calculaion function and total record count----------------------------------------*/

function sumInputs(res){
	var totalSum = 0;
	for (var i=0;i<res.length;i++){
		totalSum = totalSum + res[i][3];
	}
	document.getElementById("amount").value = totalSum;
	document.getElementById("totalCount").value = res.length;
}

/*------------------------Category Wise filter-------------*/

function CategoryData(){/* This is same as allDetails() function*/
			var url = "https://script.google.com/macros/s/AKfycbzFuxcwsH7du38xEDXVL7f93102cWfnx7vVxiwkZXZScqbTncKMLp0BCEvDZz3URNbD/exec";//"All Details Script"
	
			fetch(url)
			.then(d => d.json())
			.then(d => {
				categoryFilter(d);
				//document.getElementById("app").innerHTML = kk;
				//document.getElementById("app1").value = d;
			}).catch((err) => {
		    alert(err)
		});

	
	
}

function categoryFilter(allDetails){
	var category = document.getElementById("categoryValue").value;
	var filteredDetails = [];
	for (var i=0;i<allDetails.length;i++){
		if (allDetails[i][2]==category){
			filteredDetails.push(allDetails[i]);
		}
	}
	tableLoop(filteredDetails);
	sumInputs(filteredDetails)

}