// GLOBAL DECLARATIONS AND DEFINITIONS

const apiKey = "b8a6c701b1b6482cacf0e45294fb4d74";
const newsDiv=document.getElementById("news-container-div");
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

var userChoose = 'apple';
var currentPage = '1';

// CORE FUNCTIONALITY

async function showNews(userChoose, page) {
    let articles = await getNewsData(apiKey, userChoose, page);
    articles.forEach(article => createNewArticleDiv(article));
};

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
        `<section class="newsarticle card mb-3">
          <div class="row g-0">
            <div class="col-md-6">
              <img src="${article.urlToImage}" class="img-fluid rounded-start" alt="news image">
            </div>
            <div class="col-md-6">
                    <div class="card-body p-0">
                        <h4 class="card-title">${article.title}</h4>
                        <p class = "card-text">${article.description}</p>
                        <p>Published :${new Date(article.publishedAt).toLocaleString()}</p>
                        <a href="${article.url}" target="_blank" >Read More </a>
            </div>
        </section>`;
    newsDiv.appendChild(articleDiv);
};

// USER SEARCH

async function filterByUser() {
    currentPage = 1;
    userChoose = searchInput.value.trim();
    if (userChoose == "") {
        alert("Please enter what you would like to search");
        return
    }
    newsDiv.innerHTML = `<h3>${userChoose.toUpperCase()} NEWS</h3>`;
    await showNews(userChoose, currentPage);
}

// CATEGORY SEARCH

var button = document.getElementById("businessID");
button.addEventListener("click", async function() {
  var query = "business, company, market, economy, finance";
  newsDiv.innerHTML = `<h3>${"business".toUpperCase()} NEWS</h3>`;

  showNews(query, 1);
});

var button = document.getElementById("entertainmentID");
button.addEventListener("click", async function() {
  var query = "entertainment, art, culture, movie";
  newsDiv.innerHTML = `<h3>${"entertainment".toUpperCase()} NEWS</h3>`;
  showNews(query, 1);
});

var button = document.getElementById("musicID");    
button.addEventListener("click", async function() {
  var query = "music , songs, albums, artists, bands, concerts";
  newsDiv.innerHTML = `<h3>${"music".toUpperCase()} NEWS</h3>`;
  showNews(query, 1);
});

var button = document.getElementById("healthID");   
button.addEventListener("click", async function() {
  var query = "health, medicine, fitness, wellness, covid";
  newsDiv.innerHTML = `<h3>${"health".toUpperCase()} NEWS</h3>`;
  showNews(query, 1);
});

var button = document.getElementById("scienceID");
button.addEventListener("click", async function() {
  var query = "science";
  newsDiv.innerHTML = `<h3>${"science".toUpperCase()} NEWS</h3>`;
  showNews(query, 1);
});

var button = document.getElementById("sportID");    
button.addEventListener("click", async function() { 
  var query = "sport";
  // var query = "sports, football, cricket, tennis, soccer, basketball, baseball, olympics";
  newsDiv.innerHTML = `<h3>${"sport".toUpperCase()} NEWS</h3>`;
  showNews(query, 1);
});

var button = document.getElementById("technologyID");  
button.addEventListener("click", async function() {
  var query = "technology, gadgets, apps, software, hardware, AI, robotics";   
  newsDiv.innerHTML = `<h3>${"technology".toUpperCase()} NEWS</h3>`;
  showNews(query, 1);
});

// PAGE SELECTION

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

// PAGE INITIALISATION

function defaultNews() {
    searchInput.value = "";
    showNews(userChoose, currentPage);
    searchButton.addEventListener("click", filterByUser);
}

defaultNews()