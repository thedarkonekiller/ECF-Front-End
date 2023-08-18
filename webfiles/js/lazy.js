let observer = new IntersectionObserver(observables => {
    for (let observable of observables) {
        if (observable.isIntersecting) {
            let content = observable.target.id
            switch (content) {
                case "pic1":
                    let pic1 = document.querySelector("#pic1")
                    pic1.setAttribute('src', pic1.dataset.src)
                    pic1.classList.remove("loading")
                    pic1.classList.add("fondue")
                    observer.unobserve(observable.target)
                    break;
                case "pic2":
                    let pic2 = document.querySelector("#pic2")
                    pic2.setAttribute('src', pic2.dataset.src)
                    pic2.classList.remove("loading")
                    pic2.classList.add("fondue")
                    observer.unobserve(observable.target)
                    break;
                case "pic3":
                    let pic3 = document.querySelector("#pic3")
                    pic3.setAttribute('src', pic3.dataset.src)
                    pic3.classList.remove("loading")
                    pic3.classList.add("fondue")
                    observer.unobserve(observable.target)
                    break;
                case "pic4":
                    let pic4 = document.querySelector("#pic4")
                    pic4.setAttribute('src', pic4.dataset.src)
                    pic4.classList.remove("loading")
                    pic4.classList.add("fondue")
                    observer.unobserve(observable.target)
                    break;
                case "logo1":
                    let pic5 = document.querySelector("#pic5")
                    pic5.setAttribute('src', pic5.dataset.src)
                    pic5.classList.remove("loading")
                    pic5.classList.add("fondue")
                    observer.unobserve(observable.target)
                    break;
                case "logo1":
                    let logo1 = document.querySelector("#logo1")
                    logo1.setAttribute('src', logo1.dataset.src)
                    logo1.classList.remove("loading")
                    logo1.classList.add("fondue")
                    observer.unobserve(observable.target)
                    break;
                case "logo2":
                    let logo2 = document.querySelector("#logo2")
                    logo2.setAttribute('src', logo2.dataset.src)
                    logo2.classList.remove("loading")
                    logo2.classList.add("fondue")
                    observer.unobserve(observable.target)
                    break;
            }   
        }
    }

})

const imgs = document.querySelectorAll("img")

imgs.forEach(img => {
    observer.observe(img)
})