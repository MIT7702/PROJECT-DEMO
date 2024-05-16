let bars_button = document.querySelector(".bars-button");
let box = document.querySelector(".box");
let cancel = document.querySelector(".cancel")


bars_button.onclick = function(){
    bars_button.classList.toggle("active");
    box.classList.toggle("active_box");
}
document.onclick = function(e){
    if (!bars_button.contains(e.target) && !box.contains(e.target) && !active.contains(e.target) ) {
        bars_button.classList.remove("active");
        box.classList.remove("active_box");
    }
}
cancel.onclick = function(){
    bars_button.classList.remove("active");
        box.classList.remove("active_box");
}