let negative = document.querySelector("#negative")
let activo = document.querySelector("#activo")


negative.addEventListener("click",()=>{
    activo.classList.add("open"),
    negative.classList.add("cer")
})
activo.addEventListener("click",()=>{
    negative.classList.remove("cer"),
    activo.classList.remove("open")
})


// let abrir = document.querySelector("#abrir")
// let cerrar = document.querySelector("#cerrar")
// let main = document.querySelector("#main")
// abrir.addEventListener("click",()=>{
//     nav.classList.add("activo"),
//     main.classList.add("index")
// })
// cerrar.addEventListener("click",()=>{
//     nav.classList.remove("activo"),
//     main.classList.remove("index")
// })