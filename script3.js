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
allFunction();

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
  
  var idSet = ['totex', 'netex', 'avgex', 'navgex', 'maxmon', 'maxcat', 'minmon', 'mincat'];
  for (var i=0; i<idSet.length;i++){
    var invalue = idSet[i];
    document.getElementById(invalue).value = res[i][1];
    document.getElementById(invalue).readOnly = true;
  }
}

function checkfun1(res){
  var idSet = ["jan",  "feb",  "mar",  "apr",  "may",  "jun",  "jul",  "aug",  "sep",  "oct",  "nov",  "dec"];
  for (var i=0; i<idSet.length;i++){
    var invalue = idSet[i];
    document.getElementById(invalue).value = res[i][1];
    document.getElementById(invalue).readOnly = true;
  }
}

function checkfun2(res){
  var idSet = ["Pho",  "DTH",  "Mod",  "Foo",  "Tra",  "Mov",  "Hai",  "Mon",  "Pet",  "Oth",  "Inv",  "Rei","Medical"];
  for (var i=0; i<idSet.length;i++){
    var invalue = idSet[i];
    document.getElementById(invalue).value = res[i][1];
    document.getElementById(invalue).readOnly = true;
  }
}

function allFunction(){
  Statistics();
  onlyMonth();
  onlyCategory();
}


