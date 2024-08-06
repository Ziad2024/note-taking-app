let btn=document.querySelector(".btn");
let containerNotes=document.querySelector(".notes-container");
let notes;
function save(){
    window.localStorage.setItem("data" ,containerNotes.innerHTML)
}

containerNotes.innerHTML=window.localStorage.getItem("data")

btn.addEventListener("click",()=>{
    let p = document.createElement("p");
    p.setAttribute("contenteditable", "true");
    p.classList.add("input");
    let img=document.createElement("img")
    img.setAttribute("src","images/delete.png");
    p.appendChild(img);
    containerNotes.appendChild(p);
    save();
})
containerNotes.addEventListener("click",(e)=>{
    if (e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        save();
    }
    else if (e.target.tagName==="P"){
        
        notes=document.querySelectorAll(".input")
        notes.forEach(nts =>{
            nts.onkeyup = function (){
                save();
            }
        });
    }
})

document.addEventListener("keydown",e=>{
    if (e.key=== 'Enter')
    {
        document.execCommand("insertLineBreak");
        e.preventDefault();
        save();
    }
})


