var apiKey = "your_api_key";
var url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${apiKey}`;


var newsDiv = document.getElementById("news-container-div");
var searchButton = document.getElementById("search-button");
var searchInput = document.getElementById("search-input");

var currentPage = 1;
var userChoose = 'a';

async function getNewsData(url) {
    try {
        newsDiv.innerHTML = "";
        let response = await fetch(url);
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

async function showNews(url) {
    let articles = await getNewsData(url);
    articles.forEach(article => createNewArticleDiv(article));
};


function searchByCategory(category) {
    var url = constructTopHeadLineApiURL(category);
    showNews(url);
}


async function filterByUser() {
    if (userChoose == "") {
        alert("Please enter what you would like to search");
        return
    }
    currentPage = 1
    userChoose = searchInput.value.trim();
    url = constructEverythingApiURL();
    await showNews(url);
}

function pagination(pageNumber) {

    if (pageNumber == '0') {
        if (currentPage > 1) {
            currentPage--;
        }

    } else if (pageNumber == "11") {
        currentPage++;
    } else {
        currentPage = pageNumber;
    }
    url = constructEverythingApiURL()
    showNews(url);
}

function constructTopHeadLineApiURL(category) {
    return `https://newsapi.org/v2/top-headlines?q=${userChoose}&category=${category}&pageSize=10&page=${currentPage}&sortBy=popularity&apiKey=${apiKey}`
}

function constructEverythingApiURL() {
    return `https://newsapi.org/v2/everything?q=${userChoose}&pageSize=10&page=${currentPage}&sortBy=popularity&apiKey=${apiKey}`
}

function defaultNews() {
    var url = constructEverythingApiURL();
    showNews(url);
    searchButton.addEventListener("click", filterByUser);
}

defaultNews()