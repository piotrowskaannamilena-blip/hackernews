var apiKey = "your_api_key";
var newsDiv = document.getElementById("news-container-div");
var searchInput = document.getElementById("search-input");
var searchButton = document.getElementById("search-button");
var currentPage = 1
var userChoose = 'apple'


async function getNewsData(apiKey, userChoose, page) {
    try {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${userChoose}&pageSize=10&page=${page}&sortBy=popularity&apiKey=${apiKey}`);
        let data = await response.json();
        return data.articles;
    } catch (error) {
        console.log("No result found ", error);
    }
}

function createNewArticleDiv(article) {
    var articleDiv = document.createElement("div");
    articleDiv.innerHTML =
        `<h3>${article.title}</h3>
            <img src="${article.urlToImage}">
            <p>${article.description}</p>
            <p>Published :${new Date(article.publishedAt).toLocaleString()}</p>
            <a href="${article.url}" target="_blank" >Read More </a>`;


    newsDiv.appendChild(articleDiv);
};

async function showNews(userChoose, page) {
    let articles = await getNewsData(apiKey, userChoose, page);
    articles.forEach(article => createNewArticleDiv(article));
};


async function filterByUser() {
    if (userChoose == "") {
        alert("Please enter what you would like to search");
        return
    }
    currentPage = 1
    newsDiv.innerHTML = "";
    userChoose = searchInput.value.trim();
    await showNews(userChoose, currentPage);
}

function pagination(pageNumber) {
    newsDiv.innerHTML = "";
    if (pageNumber == "prev" && currentPage > 1) {
        currentPage--;
    } else if (pageNumber == "next") {
        currentPage++;
    } else {
        currentPage = pageNumber;
    }
    showNews(userChoose, currentPage);
}




function defaultNews() {
    searchInput.value = "";
    showNews(userChoose, currentPage);
    searchButton.addEventListener("click", filterByUser);
}

defaultNews()