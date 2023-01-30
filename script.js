let component = document.querySelectorAll(".component");

let readAll = document.getElementById("mark-read")

readAll.addEventListener("click", ()=>{
    component.forEach(element => {
            if (element.classList.contains("active")){
                element.classList.toggle("active");
            }
    })
})

component.forEach(element => {
    element.addEventListener("click",()=>{
        if (element.classList.contains("active")){
            element.classList.toggle("active");
        }
    })
    
})