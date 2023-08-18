const navbar = document.querySelector('#menu')

const observWindow = new ResizeObserver(entries => {
    entries.forEach(entry => {
        const burgerSize = entry.contentRect.width < 1160
        if (burgerSize) {
            if (!document.querySelector('.hmContainer')) {
                navbar.classList.add('hidden')
                let hmContainer = document.createElement('div')
                let hMenu = document.createElement('div')
                hmContainer.classList.add('hmContainer')
                hMenu.classList.add('hMenu')
                document.body.appendChild(hmContainer)
                hmContainer.appendChild(hMenu)
                hmContainer.addEventListener('click', () => {
                    hmContainer.classList.toggle('active')
                    navbar.classList.toggle('hidden')
                    navbar.classList.toggle('hMenuList')
                })   
            }
        }
        else {
            navbar.classList.remove('hidden')
            if (document.querySelector('.hmContainer')) {
                document.querySelector('.hmContainer').remove()   
            }
        }
    })
})

observWindow.observe(document.body)