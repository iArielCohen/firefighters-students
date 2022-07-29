const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')
const toTest1 = document.querySelector(".to-test-1")
const toTest2 = document.querySelector(".to-test-2")


listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()

        item.classList.add('active')
        contents[idx].classList.add('show')
    })
})

function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}


function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
}

toTest1.addEventListener('click', () => {
    window.open("../Test/Test1/quiz.html")
})

toTest2.addEventListener('click', () => {
    window.open("../Test/Test2/quiz.html")
})