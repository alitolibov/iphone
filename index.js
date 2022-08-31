let iphones = {
    green: "'https://www.apple.com/v/iphone-13/h/images/key-features/hero/hero_green__rz0u5fdewmqq_large.jpg'",  
    pink: 'https://www.apple.com/v/iphone-13/h/images/key-features/hero/hero_pink__ghy09iqzzca6_large.jpg',
    blue: 'https://www.apple.com/v/iphone-13/h/images/key-features/hero/hero_blue__bn5i4jxh51si_large.jpg',
    black: 'https://www.apple.com/v/iphone-13/h/images/key-features/hero/hero_midnight__bo91w7inegwi_large.jpg',
    white: 'https://www.apple.com/v/iphone-13/h/images/key-features/hero/hero_starlight__tjp0q09a16i6_large.jpg',
    red: 'https://www.apple.com/v/iphone-13/h/images/key-features/hero/hero_red__eogpx7m2jwk2_large.jpg'

}
let btns = document.querySelectorAll('div[data-colors]') 
let img = document.querySelector('.img-block')

btns.forEach(btn => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-colors')
        img.style.backgroundImage = `url("${iphones[key]}")`
    }
})

let link = document.querySelector('.flex-link')
let big = document.querySelector('.all-block')
let mini = document.querySelector('.mini-block')
link.onclick = () => {
    big.style.display = 'flex'
    mini.style.display = 'block'
}
let close = document.querySelector('.krest')
close.onclick = () => {
    big.style.display = 'none'
    mini.style.display = 'none'
}

let wrap = document.querySelector('.open-garmoshka')
let level = document.querySelector('.story-block')
wrap.onclick = () => {
    wrap.classList.toggle('active')
    level.classList.toggle('x')
}