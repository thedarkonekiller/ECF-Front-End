window.addEventListener("scroll", showScrollBtn)

function showScrollBtn() {
    if (window.scrollY > 100) {
        if (document.querySelector("#backToTopContainer")) {
            document.querySelector("#backToTopContainer").addEventListener("click", ReturnTop)            
        } else {
            let scrollBtnContainer = document.createElement("div")
            let scrollBtn = document.createElement("i")
            scrollBtn.className = "fa-solid fa-angles-up"
            scrollBtnContainer.id = "backToTopContainer"
            scrollBtn.id = "backToTop"
            document.body.appendChild(scrollBtnContainer)
            scrollBtnContainer.appendChild(scrollBtn)
            scrollBtn.addEventListener("click", ReturnTop)

        }  
    } else {
      let scrollBtn = document.querySelector("#backToTopContainer")
      if(scrollBtn){
          scrollBtn.remove()
      }
    }
}

function ReturnTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
}