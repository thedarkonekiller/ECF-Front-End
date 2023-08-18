const btnPlus = document.querySelector('#btnPlus')

btnPlus.addEventListener('click', (e) => {
    e.preventDefault()
    let modalBg = document.createElement('div')
    let modalContainer = document.createElement('div')
    let modalContent = document.createElement('p')
    modalBg.classList.add('modalBg')
    modalContainer.classList.add('modalContainer')
    modalContent.classList.add('modalContent')
    modalContent.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo neque laudantium eos! Dignissimos autem odit necessitatibus veritatis cum, corrupti modi porro minima natus consectetur. Magnam, similique in. Ad, architecto magnam! Provident expedita libero quae molestiae rerum veniam voluptatem sunt, laboriosam ab earum quam reiciendis! Ipsa aliquid commodi itaque ex, tenetur voluptatibus quod reprehenderit delectus provident nihil tempora iure reiciendis dolores. Perspiciatis aspernatur consequatur minima sunt eaque, odit saepe magnam eligendi deserunt, corrupti ad nisi qui nam quo quasi corporis aliquid ullam neque, porro ipsam eveniet sed. Ducimus reiciendis cumque eaque!"
    document.body.appendChild(modalBg)
    modalBg.appendChild(modalContainer)
    modalContainer.appendChild(modalContent)
    if (document.querySelector(".modalBg") != null) {
            modalBg.addEventListener("click", () => {
            document.querySelector(".modalBg").remove()
        })
    }
})