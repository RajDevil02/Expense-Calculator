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



function Statistics(){
  var url = "https://script.google.com/macros/s/AKfycbyrfmf5D2sIxOMRfB-v2SNN_dNBpe1wz4ruInDgorafwA6ePpKPnD9DRjXTvGlrvZoA/exec";
  
  fetch(url)
  .then(d => d.json())
  .then(d => {
    checkfun(d);
  })
  
  
}

function onlyMonth(){
  var url = "https://script.google.com/macros/s/AKfycbwBPBhs2JVD70kxNhwS_JbrimDtkBnjW6dHK98XGQEq0NXpZ0hIal1iluRadRsDZ200Yw/exec";
  
  fetch(url)
  .then(d => d.json())
  .then(d => {
    checkfun1(d);
    //document.getElementById("app").innerHTML = kk;
    //document.getElementById("app1").value = d;
  }).catch((err) => {
    alert(err)
})
}


function onlyCategory(){
  var url = "https://script.google.com/macros/s/AKfycbyeCfPKIuffAUkIg0xO_6jtlY9i89lLK26u0REvRC0krSGwHWmCv8_qFtkKQxdlkFlB/exec";
  
  fetch(url)
  .then(d => d.json())
  .then(d => {
    checkfun2 (d);
    //document.getElementById("app").innerHTML = kk;
    //document.getElementById("app1").value = d;
  }).catch((err) => {
    alert(err)
});
}


function checkfun(res){
  var stat1 = ""
  for (var i=0; i<res.length; i++){
    stat1 = stat1+"<br>"+res[i];
  };
  document.getElementById("king").innerHTML = stat1;
}

function checkfun1(res){
  var stat1 = ""
  for (var i=0; i<res.length; i++){
    stat1 = stat1+"<br>"+res[i];
  };
  document.getElementById("Monthly").innerHTML = stat1;
}

function checkfun2(res){
   var stat1 = ""
  for (var i=0; i<res.length; i++){
    stat1 = stat1+"<br>"+res[i];
  };
  document.getElementById("Category").innerHTML = stat1;
}

function allFunction(){
  Statistics();
  onlyMonth();
  onlyCategory();
}

document.getElementById("buttc").addEventListener("click", allFunction);
