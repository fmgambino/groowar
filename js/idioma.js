var check=document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
    let id=check.ckecked;
    console.log(check.checked);

    if(id==true){
        location.href="en/index.html";
        console.log("se va a ingles");
    }else{
            
        location.href="index.html";
        console.log("Se va a espanish");
    }
    
}