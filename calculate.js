let input = document.querySelector("input");

function display(result){
    input.value += result;
}

function calculate(){
    try{
        input.value = eval(input.value);
    }
    catch(err){
        alert("Invalid");
    }
}

function Clear(){
    input.value = "";
}

function del(){
    input.value =input.value.slice(0,-1);
}


  


