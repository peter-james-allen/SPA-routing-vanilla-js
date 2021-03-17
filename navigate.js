'use strict';

let createPage = `
<h1>Create a Note</h1>
`
let viewPage = `
<h1>View Notes</h1>
<ul>${fillList()}</ul>
`
let deletePage = `
<h1>Delete a Note</h1>
`
let editPage = `
<h1>Edit a Note</h1>
`

let routes = {
  'create' : createPage, 
  'view' : viewPage, 
  'delete' : deletePage, 
  'edit' : editPage
}

window.addEventListener('hashchange', (e) => {
  let contentDiv = document.getElementById('content');
  contentDiv.innerHTML = routes[window.location.hash.split('#')[1]];
})

function fillList() {
  let nums = [1,2,3,4]
  let str = ''
  nums.forEach(function(item) {
    str += `<li>Note ${item}</li>`
  })
  return str
}