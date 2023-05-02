$('.featuresCards').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1400:{
            items:4
        }
    }
})


$('.clintSlider').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:1
        },
        992:{
            items:1
        },
        1400:{
            items:1
        }
    }
})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))