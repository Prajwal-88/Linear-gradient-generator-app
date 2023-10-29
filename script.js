const cardis =document.querySelector("#card");
const generate= document.querySelector("#gen");
const ico= document.querySelector("#icon");
const copy =document.querySelector("#copy-btn");
const inp =document.querySelector("input");

let random_generator = (num) =>{
    return Math.floor(Math.random() * num);
}

let rgb_fn =() =>{
    return `linear-gradient(${random_generator(360)}deg,rgb(${random_generator(255)},${random_generator(255)},${random_generator(255)}),rgb(${random_generator(255)},${random_generator(255)},${random_generator(255)})),rgb(${random_generator(255)},${random_generator(255)},${random_generator(255)})`;
}
window.addEventListener('load',()=>{
    let rgn_fn =rgb_fn();
    cardis.style.background=rgn_fn;
    inp.value=rgn_fn;
}) 
generate.addEventListener('click',()=>{
    let rgn_fn =rgb_fn();
    cardis.style.background=rgn_fn;
    inp.value=rgn_fn;
    ico.classList.replace("fa-check","fa-clipboard");
})

copy.addEventListener('click',() =>{
    inp.select();
    inp.setSelectionRange(0,99999);
    navigator.clipboard.writeText(inp.value);
    ico.classList.replace("fa-clipboard","fa-check");
})


