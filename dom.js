

const newd=document.createElement('div')
const newtext=document.createTextNode('prashant chavan')
newd.appendChild(newtext)

// document.body.append(newd)

document.body.prepend(newd)
newd.remove()