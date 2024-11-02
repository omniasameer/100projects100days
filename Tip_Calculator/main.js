let bill=document.getElementById('bill');
let tip= document.getElementById('tip');
let btn = document.getElementById('btn');
let tex = document.getElementById('p');

function GetTotal(){
    let billValue = bill.value;
    let  tipvalue = tip.value;
   total = billValue * (1 - tipvalue / 100 );
    tex.innerText = `Total : ${total} $`;
}
btn.addEventListener('click',GetTotal)