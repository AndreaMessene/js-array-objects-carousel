const images = [
    {
        image: './assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: './assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: './assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: './assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: './assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let contImg = document.getElementById('contImg');

for (let i = 0; i < images.length; i++) {
    console.log(images[i])
    if (i > 0) {
        contImg.innerHTML += `
        <div class="item" id="${i}">)
            <img src=${images[i].image} alt="">
        </div>`
    } else {
        contImg.innerHTML += `
    <div class="item first active" id="${i}">)
        <img src=${images[i].image} alt="">
    </div>`
    }
}



const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

console.log(prev, next)

next.addEventListener('click', function () {

    let activeItem = document.querySelector('.item.active')





    console.log(activeItem)

    let nextItem = activeItem.nextElementSibling

    console.log(nextItem)

    if (activeItem.id == images.length - 1) {
        nextItem = document.querySelector(".first")
    }

    activeItem.classList.remove('active')

    nextItem.classList.add('active')

})

prev.addEventListener('click', function () {

    let activeItem = document.querySelector('.item.active')



    console.log(activeItem)

    let nextItem = activeItem.previousElementSibling

    console.log(nextItem)

    if (activeItem.classList.contains("first")) {
        nextItem = document.querySelector(".last")
    }

    activeItem.classList.remove('active')

    nextItem.classList.add('active')

})


