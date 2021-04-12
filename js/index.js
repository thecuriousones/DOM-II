// Selectors
const nav = document.querySelector('.nav')
const header = document.querySelector('.logo-heading')
const headerImg = document.querySelector('img')
const footer = document.querySelector('.footer') 
const lastImg = document.querySelector('.content-destination img')
const mapImg = document.querySelector('.img-content')
const wonkyHeader = document.querySelector('.content-destination h2')
const secondPar = document.querySelector('.content-section p')
const busImg = document.querySelector('.intro img')

// Browser
window.addEventListener('load', event => {
    alert('🤫FIND THE SECRET MESSAGE🤫')
})

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

// Hint 3
mapImg.addEventListener('dblclick', event => {
    alert('Psst (；￢＿￢) one of those headers looking kinda wonky check it out for me?')
})

wonkyHeader.addEventListener('mousemove', event => {
    event.target.textContent = 'no'
})

wonkyHeader.addEventListener('mouseout', event => {
    event.target.textContent = 'Pick Your Destination'
    alert('Hmmm only one word... huh you are kinda bad at this arent you 🤦‍♂️ try a paragraph maybe you will have better luck')
})

// Hint 4 
secondPar.addEventListener('mousemove', event => {
    event.target.textContent = 'secret'
})

secondPar.addEventListener('mouseout', event => {
    event.target.textContent = 'Adventure webdesign pretty design design, excursion cute WordPress blogger design webdesign adventure. Pretty simple traveling fun WordPress wanderlust darn simple organized.'
    alert("What? Were you expecting another quippy message?? Well I dont feel like it click the 'y' key😒")
})

// Hint 5
document.addEventListener('keydown' , event => {
    if (event.key == 'y') {
        alert("Your final hint is: message ( ・・)つ 🚨DONT PUT THE PIECES TOGETHER YET🚨 click the 'p' key")
    }
})

document.addEventListener('keyup' , event => {
    if (event.key == 'p') {
        alert('🥁Annnndddd finally ladies and gents the secret message we were all waiting on isssss🥁')
        alert('🥳🥳🥳THERE WAS NO SECRET MESSAGE 🥳🥳🥳')
        alert("Wait wait hold on before you throw me into the river would you please click the bus image 🙏🏾")
    }
})

// Thanks for playing
busImg.addEventListener('mousedown', event => {
    alert('Thanks for playing °˖✧◝(⁰▿⁰)◜✧˖°')
})

