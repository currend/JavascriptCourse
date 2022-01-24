//create text node
/*var h = document.createElement('h1')
var myVal = document.createTextNode('Hello World')
h.appendChild(myVal)
document.querySelector('h1').appendChild(h)*/

var ul = document.getElementById('list')
var li;

var addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)
var removeButton = document.getElementById('remove')
removeButton.addEventListener('click', removeItem)
var removalAllButton = document.getElementById('removeall')
removalAllButton.addEventListener('click', removeAll)



function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    ul =  document.getElementById('list');
    var textNode = document.createTextNode(item)

    if (item === '') {
        var addNewPara = document.createElement('p')
        addNewPara.innerHTML = "Enter your TODO" 
        document.querySelector('input').after(addNewPara)
        
    } else {
        //create list item
        li = document.createElement('li')

        //create checkbox
        var checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        checkBox.setAttribute('id', 'check') 

        //create label
        var label = document.createElement('label')
        label.setAttribute('for', 'item')

        //add these to web page
        ul.appendChild(label)
        li.appendChild(checkBox)
        label.appendChild(textNode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        setTimeout(() => {
            li.className = 'visual'
        }, 10);
        input.value = ""
    }
    
}

function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
}

function removeAll() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        ul.remove(li[index])
    }
}