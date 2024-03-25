const plus = document.querySelector('[data-action="plus"]')
const minus = document.querySelector('[data-action="minus"]')
const counter = document.querySelector(".items__current")

plus.addEventListener("click", ()=>{
    counter.innerHTML = ++counter.innerHTML
})
minus.addEventListener("click", ()=>{
    if(parseInt(counter.innerHTML) > 1){
        counter.innerHTML = --counter.innerHTML
    }
})