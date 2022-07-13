const slider = document.querySelector('.slider-container'),
  slides = Array.from(document.querySelectorAll('.slide'))

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID = 0,
  currentIndex = 0

slides.forEach((slide, index) => {
  const slideImage = slide.querySelector('img')
  slideImage.addEventListener('dragstart', (e) => e.preventDefault())

  // Touch events
  slide.addEventListener('touchstart', touchStart(index))
  slide.addEventListener('touchend', touchEnd)
  slide.addEventListener('touchmove', touchMove)

  // Mouse events
  slide.addEventListener('mousedown', touchStart(index))
  slide.addEventListener('mouseup', touchEnd)
  slide.addEventListener('mouseleave', touchEnd)
  slide.addEventListener('mousemove', touchMove)
})

// Disable context menu
/*
window.oncontextmenu = function (event) {
  event.preventDefault()
  event.stopPropagation()
  return false
}
*/
function touchStart(index) {
  return function (event) {
    currentIndex = index
    startPos = getPositionX(event)
    isDragging = true

    // https://css-tricks.com/using-requestanimationframe/
    animationID = requestAnimationFrame(animation)
    slider.classList.add('grabbing')
  }
}

function touchEnd() {
  isDragging = false
  cancelAnimationFrame(animationID)

  const movedBy = currentTranslate - prevTranslate

  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1

  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1

  setPositionByIndex()

  slider.classList.remove('grabbing')
}

function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event)
    currentTranslate = prevTranslate + currentPosition - startPos
  }
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
}

function animation() {
  setSliderPosition()
  if (isDragging) requestAnimationFrame(animation)
}

function setSliderPosition() {
  slider.style.transform = `translateX(${currentTranslate}px)`
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth
  prevTranslate = currentTranslate
  setSliderPosition()
}

//Contents 01 Grape
let btn1Grape = document.getElementById('btn1Grape')
let btn1Strawberry = document.getElementById('btn1Strawberry')
let btn1Kiwi = document.getElementById('btn1Kiwi')
let next1 = document.getElementById('next1')


btn1Grape.addEventListener('click', function() {
    let audioGrape = document.getElementById('audioGrape')
    audioGrape.play()
    document.getElementById('btn1Grape').setAttribute("style", "box-shadow: 0 0 0")
    btn1Grape.style.backgroundColor = 'chartreuse'
    btn1Grape.style.color = 'red'
    next1.style.visibility = 'visible'
    btn1Strawberry.disabled = 'true'
    btn1Kiwi.disabled = 'true'
})

btn1Strawberry.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn1Strawberry').setAttribute("style", "box-shadow: 0 0 0")
    btn1Strawberry.style.backgroundColor = 'red'
    btn1Strawberry.style.color = 'yellow'
    btn1Strawberry.disabled = 'true'
    
})
btn1Kiwi.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn1Kiwi').setAttribute("style", "box-shadow: 0 0 0")
    btn1Kiwi.style.color = 'yellow'
    btn1Kiwi.style.backgroundColor = 'red'
    btn1Kiwi.disabled = 'true'
})
//Contents 02 Pineapple
let btn2Strawberry = document.getElementById('btn2Strawberry')
let btn2Papaya = document.getElementById('btn2Papaya')
let btn2Kiwi = document.getElementById('btn2Kiwi')
let next2 = document.getElementById('next2')


btn2Strawberry.addEventListener('click', function() {
    let audioStrawberry = document.getElementById('audioStrawberry')
    audioStrawberry.play()
    document.getElementById('btn2Strawberry').setAttribute("style", "box-shadow: 0 0 0")
    btn2Strawberry.style.backgroundColor = 'chartreuse'
    btn2Strawberry.style.color = 'red'
    next2.style.visibility = 'visible'
    btn2Papaya.disabled = 'true'
    btn2Kiwi.disabled = 'true'
})

btn2Papaya.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn2Papaya').setAttribute("style", "box-shadow: 0 0 0")
    btn2Papaya.style.backgroundColor = 'red'
    btn2Papaya.style.color = 'yellow'
    btn2Papaya.disabled = 'true'
    
})

btn2Kiwi.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn2Kiwi').setAttribute("style", "box-shadow: 0 0 0")
    btn2Kiwi.style.backgroundColor = 'red'
    btn2Kiwi.style.color = 'yellow'
    btn2Kiwi.disabled = 'true'
})
//Contents 03 Kiwi
let btn3Kiwi = document.getElementById('btn3Kiwi')
let btn3Orange = document.getElementById('btn3Orange')
let btn3Papaya = document.getElementById('btn3Papaya')
let next3 = document.getElementById('next3')


btn3Kiwi.addEventListener('click', function() {
    let audioKiwi = document.getElementById('audioKiwi')
    audioKiwi.play()
    document.getElementById('btn3Kiwi').setAttribute("style", "box-shadow: 0 0 0")
    btn3Kiwi.style.backgroundColor = 'chartreuse'
    btn3Kiwi.style.color = 'red'
    next3.style.visibility = 'visible'
    btn3Orange.disabled = 'true'
    btn3Papaya.disabled = 'true'
})

btn3Orange.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn3Orange').setAttribute("style", "box-shadow: 0 0 0")
    btn3Orange.style.backgroundColor = 'red'
    btn3Orange.style.color = 'yellow'
    btn3Orange.disabled = 'true'
    
})

btn3Papaya.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn3Papaya').setAttribute("style", "box-shadow: 0 0 0")
    btn3Papaya.style.backgroundColor = 'red'
    btn3Papaya.style.color = 'yellow'
    btn3Papaya.disabled = 'true'
})
//Contents 04 Papaya
let btn4Papaya = document.getElementById('btn4Papaya')
let btn4Starfruit = document.getElementById('btn4Starfruit')
let btn4Orange = document.getElementById('btn4Orange')
let next4 = document.getElementById('next4')


btn4Papaya.addEventListener('click', function() {
    let audioPapaya = document.getElementById('audioPapaya')
    audioPapaya.play()
    document.getElementById('btn4Papaya').setAttribute("style", "box-shadow: 0 0 0")
    btn4Papaya.style.backgroundColor = 'chartreuse'
    btn4Papaya.style.color = 'red'
    next4.style.visibility = 'visible'
    btn4Starfruit.disabled = 'true'
    btn4Orange.disabled = 'true'
})

btn4Starfruit.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn4Starfruit').setAttribute("style", "box-shadow: 0 0 0")
    btn4Starfruit.style.backgroundColor = 'red'
    btn4Starfruit.style.color = 'yellow'
    btn4Starfruit.disabled = 'true'
    
})

btn4Orange.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn4Orange').setAttribute("style", "box-shadow: 0 0 0")
    btn4Orange.style.backgroundColor = 'red'
    btn4Orange.style.color = 'yellow'
    btn4Orange.disabled = 'true'
})
//Contents 05 Orange
let btn5Orange = document.getElementById('btn5Orange')
let btn5Starfruit = document.getElementById('btn5Starfruit')
let btn5Lemon = document.getElementById('btn5Lemon')
let next5 = document.getElementById('next5')


btn5Orange.addEventListener('click', function() {
    let audioOrange = document.getElementById('audioOrange')
    audioOrange.play()
    document.getElementById('btn5Orange').setAttribute("style", "box-shadow: 0 0 0")
    btn5Orange.style.backgroundColor = 'chartreuse'
    btn5Orange.style.color = 'red'
    next5.style.visibility = 'visible'
    btn5Starfruit.disabled = 'true'
    btn5Lemon.disabled = 'true'
})

btn5Starfruit.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn5Starfruit').setAttribute("style", "box-shadow: 0 0 0")
    btn5Starfruit.style.backgroundColor = 'red'
    btn5Starfruit.style.color = 'yellow'
    btn5Starfruit.disabled = 'true'
    
})

btn5Lemon.addEventListener('click', function() {
    let audioPop = document.getElementById('audioPop')
    audioPop.play()
    document.getElementById('btn5Lemon').setAttribute("style", "box-shadow: 0 0 0")
    btn5Lemon.style.backgroundColor = 'red'
    btn5Lemon.style.color ='yellow'
    btn5Lemon.disabled = 'true'
})
