export function compose(event) {
  const key = event.key.toLowerCase();

  if (key.length === 1 && key >= 'a' && key <= 'z') {
    createNote(key);
  } else if (key === 'backspace') {
    deleteLastNote();
  } else if (key === 'escape') {
    clearAllNotes();
  }
}

function createNote(key) {
  const note = document.createElement('div');
  note.className = 'note';
  note.textContent = key;
  note.style.backgroundColor = generateColor(key);
  document.body.appendChild(note);
}

function deleteLastNote() {
  const notes = document.querySelectorAll('.note');
  if (notes.length > 0) {
    notes[notes.length - 1].remove();
  }
}

function clearAllNotes() {
  const notes = document.querySelectorAll('.note');
  notes.forEach(note => note.remove());
}

function generateColor(key) {
  const hue = (key.charCodeAt(0) - 97) * (360 / 26);
  return `hsl(${hue}, 100%, 50%)`;
}

// Add event listener to the document
document.addEventListener('keydown', compose);