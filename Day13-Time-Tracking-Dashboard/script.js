const timeOptions = document.querySelectorAll("#time-options>*");

for (option of timeOptions){
    option.addEventListener("click",(e)=>{
        options = e.target.parentElement.children;
        for (option_ of options){
            option_.classList.remove("time-option-active");
        }
        e.target.classList.add("time-option-active");
    });
}