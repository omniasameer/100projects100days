let display = document.getElementById("display");

function appendtodisplay(input){
    display.value += input;
}

function cleardisplay(){
    display.value="";
}
function calc(){
    try{
        display.value = eval(display.value)
    }catch(error){
        display.value = "Error"
    }
}