var check=document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
    let id=check.ckecked;
    if(id==false){
        location.href="./es/index.html";
    }else{
            
        location.href="../index.html";
    }
}