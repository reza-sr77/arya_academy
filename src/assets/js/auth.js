const card = document.getElementById('cardWrap')

window.addEventListener('mousemove', (e) => {
  let x = e.pageX - (innerWidth / 2)
  let y = e.pageY - (innerHeight / 2)
  card.style.transform = `translate(${x / 40}px, ${y / 40}px)`
})


const card1 = document.getElementById('cardWrap1')

window.addEventListener('mousemove', (e) => {
  let x = e.pageX - (innerWidth / 2)
  let y = e.pageY - (innerHeight / 2)
  card1.style.transform = `translate(${x / 40}px, ${y / 40}px)`
})

const card2 = document.getElementById('cardWrap2')

window.addEventListener('mousemove', (e) => {
  let x = e.pageX - (innerWidth / 2)
  let y = e.pageY - (innerHeight / 2)
  card2.style.transform = `translate(${x / 40}px, ${y / -40}px)`
})

const card3 = document.getElementById('cardWrap3')

window.addEventListener('mousemove', (e) => {
  let x = e.pageX - (innerWidth / 2)
  let y = e.pageY - (innerHeight / 2)
  card3.style.transform = `translate(${x / -40}px, ${y / 40}px)`
})

const card4 = document.getElementById('cardWrap4')

window.addEventListener('mousemove', (e) => {
  let x = e.pageX - (innerWidth / 2)
  let y = e.pageY - (innerHeight / 2)
  card4.style.transform = `translate(${x / -40}px, ${y / -40}px)`
})

const card5 = document.getElementById('cardWrap5')

window.addEventListener('mousemove', (e) => {
  let x = e.pageX - (innerWidth / 2)
  let y = e.pageY - (innerHeight / 2)
  card5.style.transform = `translate(${x / -40}px, ${y / -40}px)`
})