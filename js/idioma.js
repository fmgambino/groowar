var check=document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma(){
    let id=check.ckecked;
    if(id==true){
        location.href="language/en.html";
        } else{
            location.href="../index.html";
        }
}