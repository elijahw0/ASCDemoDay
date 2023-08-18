// let donateBtn = document.getElementById("donateSubmit");
// donateBtn.onClick = function(e){
//     e.preventDefault();
// }

// Get references to the buttons and elements
const Bkbtn = document.getElementById("BK");
const BXbtn = document.getElementById("BX");
const Quebtn = document.getElementById("Que");
const SIbtn = document.getElementById("Man");
const Manbtn = document.getElementById("SI");

const sta = document.getElementById("staten");
const bk = document.getElementById("brook");
const manH = document.getElementById("man");
const bx = document.getElementById("brox");
const qS = document.getElementById("queen");

const murWid = document.getElementById("hp");
const assWid = document.getElementById("atk");
const SasWid = document.getElementById("def");
const rapWid = document.getElementById("sp_atk");
const othWid = document.getElementById("sp_def");

// Define a function to hide all elements
function hideAll() {
    sta.style.display = "none";
    qS.style.display = "none";
    bx.style.display = "none";
    manH.style.display = "none";
    bk.style.display = "none";
}

// Define click event handlers
function onClickBk() {
    hideAll();
    bk.style.display = "block";
    murWid.style.width = "30px";
    assWid.style.width = "257px";
    SasWid.style.width = "150px";
    rapWid.style.width = "150px";
    othWid.style.width = "40px";
    
}

function onClickBX() {
    hideAll();
    bx.style.display = "block";
    murWid.style.width = "110px";
    assWid.style.width = "643px";
    SasWid.style.width = "450px";
    rapWid.style.width = "450px";
    othWid.style.width = "392px";
}

function onClickMan() {
    hideAll();
    manH.style.display = "block";
    murWid.style.width = "60px";
    assWid.style.width = "480px";
    SasWid.style.width = "260px";
    rapWid.style.width = "260px";
    othWid.style.width = "231px";
}

function onClickSI() {
    hideAll();
    sta.style.display = "block";
    murWid.style.width = "20px";
    assWid.style.width = "223px";
    SasWid.style.width = "130px";
    rapWid.style.width = "130px";
    othWid.style.width = "90px";
}

function onClickQue() {
    hideAll();
    qS.style.display = "block";
    murWid.style.width = "50px";
    assWid.style.width = "456px";
    SasWid.style.width = "310px";
    rapWid.style.width = "310px";
    othWid.style.width = "95px";
}

// Attach click event handlers to buttons
Bkbtn.addEventListener("click",()=>{
    onClickBk();

});



BXbtn.addEventListener("click",()=>{
    onClickBX();
})
Quebtn.addEventListener("click",()=>{
    onClickQue();
})
SIbtn.addEventListener("click",()=>{

    onClickSI();
})
Manbtn.addEventListener("click",onClickMan)
