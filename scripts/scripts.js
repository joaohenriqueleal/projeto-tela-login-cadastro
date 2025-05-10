"use strict"


const myObserver = new IntersectionObserver((entryes) => {
    entryes.map((entrye) => {
        if (entrye.isIntersecting) {
            entrye.target.classList.add('show')
        } else {
            entrye.target.classList.remove('show')
        }
    })
})

const hiddens = [...document.querySelectorAll('.hidden')]

hiddens.map((element) => myObserver.observe(element) )

const myImgObserver = new IntersectionObserver((entryes) => {
    entryes.map((entrye) => {
        if (entrye.isIntersecting) {
            entrye.target.classList.add('show')
        } else {
            entrye.target.classList.remove('show')
        }
    })
})

const img_hiddens = [...document.querySelectorAll('.img_hidden')]

img_hiddens.map((element) => myImgObserver.observe(element) )
