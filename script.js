function onLoadofPage(){
    greetings()
    
getCategoryValuesToDisplay()
getLastNExpenses()
}

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
	const drCategory = document.querySelector('input[name="categories"]:checked').value;
	const txAmount = document.getElementById("textAmount").value;
	const txDetail  = document.getElementById("textDetail").value;
	const spentLocation = document.getElementById("locationSpent").value
	const mandatoryCheck = document.querySelector('input[name="mandate"]:checked').value;
  const selfCheck = document.querySelector('input[name="self"]:checked').value;
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
    body: JSON.stringify({date: daExpense, month: txMonth, category: drCategory, mandatory: mandatoryCheck, self: selfCheck, Amount: txAmount, location: spentLocation,detail: txDetail}) // body data type must match "Content-Type" header
  }).then(d=>{
  	alert("The Response is Submitted");
  }).then(()=>getLastNExpenses());
  
  
  
  
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

const setDateOnLoad = () => {
    var dateNow = new Date();
    var formattedDate = dateNow.toISOString().split('T')[0]; // Formats the date as YYYY-MM-DD
    document.getElementById("dateex").value = formattedDate;
    
}
setDateOnLoad()





}

async function  getCategoryValuesToDisplay(){
  const url = "https://script.google.com/macros/s/AKfycbywJYmg-bhS610CgdxGGkSBWZY1xjL-z5XdXF1powKywblecqozoqcxMGr297ntb8BClg/exec"
  const categoryEl = document.getElementById("categoryGrid")
  

  // keep UI empty (or show a minimal loading state) until data arrives
  

  try{
    const response = await fetch(url)
    //console.log('Category fetch response:', response)
    
    const data = await response.json()
    
    data.forEach((item)=>{
        /*let categoryElement = document.createElement("div")
        let radioInput = document.createElement("input")
        radioInput.type = "radio"
        radioInput.id = item
        radioInput.name = "categories"
        radioInput.value = item
        let labelElement = document.createElement("label")
        labelElement.htmlFor = item
        labelElement.textContent = item
        categoryElement.appendChild(radioInput)
        categoryElement.appendChild(labelElement)
        categoryElement.appendChild(document.createElement("br"))
        categoryEl.appendChild(categoryElement)*/
    })
    //console.log('Category data:', data)
    let categoryString = data.map((item)=> `<div><input type="radio" id="${item}" name="categories" value="${item}"><label for="${item}">${item}</label></div>`).join('')    

    categoryEl.innerHTML = categoryString
  } catch(err){
    console.error('Error loading categories:', err)
    // keep the UI empty on error
  }

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

//---------------------------Last 10 Entries Section--------------------------------------------

//-------------------------------------------------------Upload File Section--------------------------------------------
const submitButton = document.getElementById("file-submit-button")
//const fileContentArea = document.getElementById("file-content")
const fileInput = document.getElementById('file-input')
const dataURL = 'https://script.google.com/macros/s/AKfycbz1WWdbx6CVmPGF0l-_CrsUPB0IOMyOX7TyzhixOtTbCoO_l-vAIt0OJRIgi6W9Pf1xlQ/exec'
var submitJsonArray = []
submitButton.addEventListener('click',sendToAPI)


function checkSplit(content) {
    const lines = content.split('\r\n')
    lines.forEach((line)=>{
        const indiviualEntry = line.split(',')
        const date = indiviualEntry[0]
        const month = indiviualEntry[1]
        const category = indiviualEntry[2]
        const amount = +indiviualEntry[3]
        const details = indiviualEntry[4]
        const location = indiviualEntry[5]
        const mandatory = indiviualEntry[6]

        submitJsonArray.push({
            date,
            month,
            category,
            amount,
            details,
            location,
            mandatory
        })
    })

    

}

async function sendToAPI(){
    const fileElement = fileInput.files[0]
    const reader = new FileReader()

    reader.onload = async ()=>{
        const content = reader.result
        await checkSplit(content)
        const sendDataToUrl = await fetch(dataURL,{
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
                
            },
            body: JSON.stringify(submitJsonArray)


        })

        alert("The Response is submitted")


    }

    reader.readAsText(fileElement)
}

function switchCity(){
	var getCurrentLocation = document.getElementById("locationSpent")
	if(getCurrentLocation.value=="Cuddalore"){
		getCurrentLocation.value = "Bangalore"
		
	}
	else if(getCurrentLocation.value=="Bangalore"){
		getCurrentLocation.value = "Cuddalore"
		
	}
}


/*----------------------Get last ten entries----------------------*/
async function getLastNExpenses(){
  let noOfEntries = 10
  const elementToReplace = document.getElementById("entriesContainer")
  const url = `https://script.google.com/macros/s/AKfycbxoBJyLNbdKGCJpQAH4ZT6rOeqtv7p1qUs4dflRVqtCkNE7IkIEqOx3drHwznBG7kMY/exec?count=${noOfEntries}`
  const response = await fetch(url)
  const data = await response.json()
  elementToReplace.innerHTML = data.map(entry => `<p>${new Date(entry[0]).toLocaleDateString("en-GB")} - ${entry[1]} - ${entry[2]} - ${entry[3]} - ${entry[4]} - ${entry[5]} - ${entry[6]} - ${entry[7]}</p>`).join('')
}



//Details: HTML Page

//Dimension 318*731



