var apiKey = "your_api_key";
var newsDiv=document.getElementById("news-container-div");
var searchInput=document.getElementById("search-input");
var searchButton=document.getElementById("search-button");


  async function getNewsData(apiKey,userChoose) {
    try {
      let response = await fetch(`https://newsapi.org/v2/everything?q=${userChoose}&sortBy=popularity&apiKey=${apiKey}`);
      let data = await response.json();
      return data.articles;
    } catch (error) {
      console.log("No result found ", error);
    }
  }
  function createNewArticleDiv(article){
    var articleDiv=document.createElement("div");
            articleDiv.innerHTML = 
            `<h3>${article.title}</h3>
            <img src="${article.urlToImage}">
            <p>${article.description}</p>
            <p>Published :${new Date(article.publishedAt).toLocaleString()}</p>
            <a href="${article.url}" target="_blank" >Read More </a>`;
            

            newsDiv.appendChild(articleDiv);
};

  async function showNews(userChoose) {
    let articles = await getNewsData(apiKey, userChoose);
    articles.forEach(article => createNewArticleDiv(article));
};


async function filterByUser() {
  newsDiv.innerHTML = ""; 
  var userChoose = searchInput.value.trim();
  if (userChoose) {
    await showNews(userChoose);
  } else {
    alert("Please enter what you would like to search");
  }
}
 searchInput.value = ""; 
  showNews("Apple");
searchButton.addEventListener("click", filterByUser);