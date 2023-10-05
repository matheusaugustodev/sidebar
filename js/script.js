let barraLateral = document.querySelector("#barraLateral")
let textoBarra = document.querySelectorAll(".textoBarra")
let itemBarra = document.querySelectorAll(".itemBarra")

itemBarra.forEach(item => { 
    let span = item.querySelector('.textoBarra')
    item.setAttribute('title', span.innerHTML)
})


barraLateral.addEventListener('mouseenter', () => {
    barraLateral.classList.remove('barraFechada')
    barraLateral.classList.add('barraAberta')
    textoBarra.forEach(item => 
        item.classList.remove('hidden')    
    )
})

barraLateral.addEventListener('mouseleave', () => {
    barraLateral.classList.add('barraFechada')
    barraLateral.classList.remove('barraAberta')

    textoBarra.forEach(item => 
        item.classList.add('hidden')    
    )
})