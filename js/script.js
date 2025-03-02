const topEl = document.querySelector(".top")
const headerEl = document.querySelector(".header")

window.addEventListener("scroll", ()=>{
    let offset = document.documentElement.scrollTop
    if(offset > 200){
        topEl.classList.remove("hidden")
    }else{
        topEl.classList.add("hidden")
    }

    if(offset > 0){
        headerEl.classList.add("shrink")
    }else{
        headerEl.classList.remove("shrink")
    }
})