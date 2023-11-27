// DOM - it just an API to interact with HTML document and change it later on demand
// its a data structure(tree)

// 1. element node
// 2. text node
// 3.attribute node
// 4. comment node
/*
// ul(element node) -> li(element node) + li -> text(text node) + text
<ul>
    <li>One</li>
    <li>Two</li>
</ul>
*/


// DOM manupulation -> change the dom tree

console.dir(document)  //to see all the details
document.head
document.body
document.childNodes //head, text, body
document.children

// __proto__ //HTMLDocument