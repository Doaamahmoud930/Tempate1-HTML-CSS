var list = document.querySelector(".linksList");
var iconList = document.querySelector(".links .icon");

iconList.addEventListener("click",function(){
    if(list.style.display == "block"){
        list.style.display = "none";
    }else{
        list.style.display = "block";
    }
})