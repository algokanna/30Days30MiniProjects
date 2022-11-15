const heroMessages = document.querySelectorAll("h1.message");

function messageConvert(h1){
    let h1String = h1.innerHTML;
    h1.innerHTML = "";
    for(let i = 0; i < h1String.length; i++){
       if (h1String[i] == " "){
            h1.innerHTML += `<span style="--i:${i}" class="anim">&nbsp;</span>`
       } else {
            h1.innerHTML += `<span style="--i:${i}" class="anim">${h1String[i]}</span>`
       }
    }
}

window.addEventListener("load",()=>{
    heroMessages.forEach(h1 => {
        messageConvert(h1);
    })
});

