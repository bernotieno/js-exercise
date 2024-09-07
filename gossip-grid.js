import { gossips } from './gossip-grid.data.js'

export function grid() {
  const body = document.querySelector('body')
  
  // Create ranges container
  const rangesDiv = document.createElement('div')
  rangesDiv.className = 'ranges'
  
  // Create width range input
  const widthRange = createRangeInput('width', 200, 800)
  rangesDiv.appendChild(widthRange)
  
  // Create fontSize range input
  const fontSizeRange = createRangeInput('fontSize', 20, 40)
  rangesDiv.appendChild(fontSizeRange)
  
  // Create background range input
  const backgroundRange = createRangeInput('background', 20, 75)
  rangesDiv.appendChild(backgroundRange)
  
  body.appendChild(rangesDiv)
  
  // Create gossip form
  const formCard = createGossipForm()
  body.appendChild(formCard)
  
  // Create gossip cards
  gossips.forEach(gossip => {
    const card = createGossipCard(gossip)
    body.appendChild(card)
  })
  
  // Add event listeners to range inputs
  widthRange.addEventListener('input', updateStyles)
  fontSizeRange.addEventListener('input', updateStyles)
  backgroundRange.addEventListener('input', updateStyles)
  widthRange
  // Initial style update
  updateStyles()
}

function createRangeInput(id, min, max) {
  const input = document.createElement('input')
  input.type = 'range'
  input.id = id
  input.className = 'range'
  input.min = min
  input.max = max
  input.value = id === 'background' ? 50 : (min + max) / 2
  return input
}

function createGossipForm() {
  const form = document.createElement('form')
  form.className = 'gossip'
  
  const textarea = document.createElement('textarea')
  form.appendChild(textarea)
  
  const button = document.createElement('button')
  button.textContent = 'Share gossip!'
  form.appendChild(button)
  
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (textarea.value.trim()) {
      const newCard = createGossipCard(textarea.value)
      form.parentNode.insertBefore(newCard, form.nextSibling)
      textarea.value = ''
    }
  })
  
  return form
}

function createGossipCard(text) {
  const card = document.createElement('div')
  card.className = 'gossip'
  card.textContent = text
  return card
}

function updateStyles() {
  const width = document.getElementById('width').value
  const fontSize = document.getElementById('fontSize').value
  const background = document.getElementById('background').value
  
  const gossipCards = document.querySelectorAll('.gossip')
  gossipCards.forEach(card => {
    card.style.width = `${width}px`
    card.style.fontSize = `${fontSize}px`
    card.style.background = `hsl(280, 50%, ${background}%)`
  })
}