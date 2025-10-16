var apiKey = "F50912309e8144bdab3e20f15da4042b";
var url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${apiKey}`;
var newsDiv=document.getElementById("news-container-div");
var userChoose = 'apple';
var currentPage = '1';
var searchButton = document.getElementById("search-button");
var searchInput = document.getElementById("search-input");

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

async function showNews(userChoose, page) {
    let articles = await getNewsData(apiKey, userChoose, page);
    articles.forEach(article => createNewArticleDiv(article));
};


/*
searchButton.addEventListener("click", async function() {   
  query = searchInput.value;
  if (!query) return;
  userChoose = query;
  url = `https://newsapi.org/v2/everything?q=${userChoose}&sortBy=popularity&apiKey=${apiKey}`;
  newsDiv.innerHTML = `<h3>${userChoose.toUpperCase()} NEWS</h3>`;
  console.log(userChoose);
  showNews(userChoose, 1);
});
*/

// business button search
var button = document.getElementById("businessID");
button.addEventListener("click", async function() {
  var query = "business, company, market, economy, finance";
  url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;
  newsDiv.innerHTML = `<h3>${"business".toUpperCase()} NEWS</h3>`;
  console.log(query);
  showNews(query, 1);
});

var button = document.getElementById("entertainmentID");
button.addEventListener("click", async function() {
  var query = "entertainment, art, culture, movie";
  url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;
  newsDiv.innerHTML = `<h3>${"entertainment".toUpperCase()} NEWS</h3>`;
  console.log(query);
  showNews(query, 1);
});

var button = document.getElementById("musicID");    
button.addEventListener("click", async function() {
  var query = "music , songs, albums, artists, bands, concerts";
  url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;
  newsDiv.innerHTML = `<h3>${"music".toUpperCase()} NEWS</h3>`;
  console.log(query);
  showNews(query, 1);
});

var button = document.getElementById("healthID");   
button.addEventListener("click", async function() {
  var query = "health, medicine, fitness, wellness, covid";
  url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;
  newsDiv.innerHTML = `<h3>${"health".toUpperCase()} NEWS</h3>`;
  console.log(query);
  showNews(query, 1);
});

var button = document.getElementById("scienceID");
button.addEventListener("click", async function() {
  var query = "science";
  url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;
  newsDiv.innerHTML = `<h3>${"science".toUpperCase()} NEWS</h3>`;
  console.log(query);
  showNews(query, 1);
});

var button = document.getElementById("sportID");    
button.addEventListener("click", async function() { 
  var query = "sport";
  // var query = "sports, football, cricket, tennis, soccer, basketball, baseball, olympics";
  url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;
  newsDiv.innerHTML = `<h3>${"sport".toUpperCase()} NEWS</h3>`;
  console.log(query);
  showNews(query, 1);
});

var button = document.getElementById("technologyID");  
button.addEventListener("click", async function() {
  var query = "technology, gadgets, apps, software, hardware, AI, robotics";   
  url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;
  newsDiv.innerHTML = `<h3>${"technology".toUpperCase()} NEWS</h3>`;
  console.log(query);
  showNews(query, 1);
});

async function filterByUser() {
    if (userChoose == "") {
        alert("Please enter what you would like to search");
        return
    }
    currentPage = 1;
    userChoose = searchInput.value.trim();
    newsDiv.innerHTML = `<h3>${userChoose.toUpperCase()} NEWS</h3>`;
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