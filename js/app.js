(function () {
    let socials = document.querySelectorAll('.social div')

    socials.forEach(function(social, index) {
        social.style.animation = 'moveIn 1s ease-in-out forwords 2s'
    })

}())