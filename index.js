//Var
const articleContainer = document.querySelector(".container")
const searchInput = document.querySelector(".search-input")
let articlesList = null
fetch('https://671e10531dfc429919812c16.mockapi.io/api/article/articles', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
}).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
}).then((articles) => {
    //update articlesList
    articlesList = articles
    // Do something with the list of tasks
    renderFunc(articles)
}).catch(error => {
    // handle error
})
//searchFunc
function searchFunc() {
    const searchValue = searchInput.value.toLowerCase()
    const articleFilter = articlesList.filter(function (article) {
        return article.title.toLowerCase().includes(searchValue);
    })
    renderFunc(articleFilter)
}
//renderFunc
function renderFunc(articles) {
    articleContainer.innerHTML = ""
    for (let i = 0; i < articles.length; i++) {
        const articleElement = document.createElement("div")
        articleElement.innerHTML = `
        <p class="title">${articles[i].title}</p>
        <img src=${articles[i].image}/>
        <p>${articles[i].createdAt}</p>
        `
        articleContainer.appendChild(articleElement)
    }
}