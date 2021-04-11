// Selectors
const nav = document.querySelector('.nav')
const header = document.querySelector('.logo-heading')
const headerImg = document.querySelector('img')
const footer = document.querySelector('.footer') 
const lastImg = document.querySelector('.content-destination img')

// Browser
window.addEventListener('load', event => {
    alert('🤫FIND THE SECRET MESSAGE🤫')
})

// document.addEventListener('scroll', event => {
//     alert('🥳THANKS FOR PLAYING🥳')
// })

// Nav
  nav.addEventListener('mouseover', event => {
    event.target.style.color = "gold"
})

nav.addEventListener('mouseout', event => {
    event.target.style.color = "black"
})

nav.addEventListener('click', event => {
    event.preventDefault()
})

// Hint 1
header.addEventListener('mousemove', event => {
    event.target.textContent = 'There was'
})

header.addEventListener('mouseout', event => {
    event.target.textContent = 'Fun Bus'
    alert('You got the first 2 words! *Incoming Message* I think you should try clicking on an image 👀')
})

// Hint 2
lastImg.addEventListener('mousedown', event => {
    event.target.style.opacity = '0%'
})

lastImg.addEventListener('mouseup', event => {
    alert('Sheesh look what you did! Clicking the wrong image smh, cant leave you alone for a second huh 😒 Try. Again.')
})

lastImg.addEventListener('mouseout', event => {
    event.target.style.opacity = '100%'
})