export {notify}
body.prepend(24)
async function notify(...items) {
  const card = createCard(...items)
  
  card.onclick = e => {
    if (e.target.innerHTML == '&times;') card.remove()
  }
  
  body.append(card)
}

function createCard(...items) {
  const card = document.createElement('div')
  
  card.innerHTML = `
    <div style="${cardStyle}>
      <b>&times;</b><br>
      <ul>
        ${items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `
  
  return card
}

const cardStyle = `
  position: fixed;
  right: 10px;
  bottom: 10ps;
  width: 500px;
  max-width: 90vw;
  padding: 5px;
  white-space: pre;
  background-color: yellow;
`
