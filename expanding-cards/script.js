const panals=document.querySelectorAll(".image");
console.log(panals)

panals.forEach(panal=>{
    panal.addEventListener("click",()=>{
        RemoveActive();
        panal.classList.add('active');
    })
})


function RemoveActive(){
    panals.forEach(panal=>{
        panal.classList.remove("active");
    })
}

