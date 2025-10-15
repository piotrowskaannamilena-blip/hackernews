var apiKey = "your_api_key";
var url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${apiKey}`;
var newsDiv=document.getElementById("news-container-div");

  async function getNewsData() {
    try {
      let response = await fetch(url);
      let data = await response.json();
      return data.articles;
    } catch (error) {
      console.log(error);
    }
  }
  function createNewArticleDiv(article){
    var articleDiv=document.createElement("div");
            articleDiv.innerHTML = 
            `<h3>${article.title}</h3>
            <img src="${article.urlToImage}">
            <p>${article.description}</p>
            <p>Published :${article.publishedAt}</p>
            <a href="${article.url}" target="_blank" >Read More </a>`;
            

            newsDiv.appendChild(articleDiv);
};

async function showNews() {
  let articles = await getNewsData();
  articles.forEach(article => createNewArticleDiv(article));
};

showNews();

