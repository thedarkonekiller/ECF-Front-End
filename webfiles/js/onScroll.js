const observScroll = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear')
            observScroll.unobserve(entry.target)
        }
    })
})

const paragraphs = document.querySelectorAll('p')
paragraphs.forEach(para => {
    observScroll.observe(para)
})