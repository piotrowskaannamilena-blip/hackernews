var apiKey = "";
var url = `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${apiKey}`;
//  `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${apiKey}`;

var newsDiv=document.getElementById("news-container-div");
var userChoose = 'apple';

async function getNewsData() {
    try {
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

async function showNews() {
    let articles = await getNewsData();
    articles.forEach(article => createNewArticleDiv(article));
};


var searchButton = document.getElementById("search-button");
var searchInput = document.getElementById("search-input");  
searchButton.addEventListener("click", async function() {   
  var query = searchInput.value;
  if (!query) return;
  url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;
  newsDiv.innerHTML = "<h2>See news about...</h2>" + `<h3> ${query} </h3>` ;
  console.log(query);
  showNews();
});
// business button search
var button = document.getElementById("businessID");
button.addEventListener("click", async function() {
  var query = "business, company, market, economy, finance";
  url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;
  newsDiv.innerHTML = "";
  console.log(query);
  showNews();
  .catch((error) => {
    document.getElementById("businessID").innerHTML = "Failed to load news.";
    console.error(error);
});


var button = document.getElementById("entertainmentID");
button.addEventListener("click", async function() {
  var query = "entertainment, art, culture, movie";
  url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;
  newsDiv.innerHTML = "";
  console.log(query);
  showNews();
});

var button = document.getElementById("musicID");    
button.addEventListener("click", async function() {
  var query = "music , songs, albums, artists, bands, concerts";
  url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;
  newsDiv.innerHTML = "";
  console.log(query);
  showNews();
});

var button = document.getElementById("healthID");   
button.addEventListener("click", async function() {
  var query = "health, medicine, fitness, wellness, covid";
  url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;
  newsDiv.innerHTML = "";
  console.log(query);
  showNews();
});


var button = document.getElementById("scienceID");
button.addEventListener("click", async function() {
  var query = "science";
  url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;
  newsDiv.innerHTML = "";
  console.log(query);
  showNews();
});

var button = document.getElementById("sportID");    
button.addEventListener("click", async function() { 
  var query = "sport";
  // var query = "sports, football, cricket, tennis, soccer, basketball, baseball, olympics";
  url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;
  newsDiv.innerHTML = "";
  console.log(query);
  showNews();
});

var button = document.getElementById("technologyID");  
button.addEventListener("click", async function() {
  var query = "AI, robotics";   
  url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;
  newsDiv.innerHTML = "";
  console.log(query);
  showNews();
});

// var button = document.getElementById("showBusinessID");
// button.addEventListener("click", async function() {
//   var query = "affair. affairs, show, actor, actress";   
//   url = `https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${apiKey}`;
//   newsDiv.innerHTML = "";
//   console.log(query);
//   showNews();
// });


// //added code for categories
// var trump = document.getElementById("categories");  
// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };
//  fetch("https://newsapi.org/v2/top-headlines?q=trump&apiKey=8404669fbb954e95bd7aace3abb30db0", requestOptions)
//     .then((response) => response.json())
//     .then((data) => {
//       trump.innerHTML = "Trump News (" + data.articles.length + " articles)";
//       data.articles.forEach(article => {
//         trump.innerHTML += ` <div> <li>
//           <img src="${article.urlToImage || ''}" alt="Image" />
//           <li><a href="${article.url}" target="_blank">${article.title}</a></li>
//           <p>${article.description || ''}</p>
//         </li> </div>`; ;
//       });
//     })
//     .catch((error) => {
//       trump.innerHTML = "Failed to load news.";
//       console.error(error);
//     });

    // //business news
    // fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8404669fbb954e95bd7aace3abb30db0", requestOptions)
    // .then((response) => response.json())
    // .then((data) => {
    //   document.getElementById("business").innerHTML = "Business News (" + data.articles.length + " articles)";
    //   data.articles.forEach(article => {
    //     document.getElementById("business").innerHTML += ` <div> <li>
    //       <img src="${article.urlToImage || ''}" alt="Image" />
    //       <li><a href="${article.url}" target="_blank">${article.title}</a></li>
    //       <p>${article.description || ''}</p>
    //     </li> </div>`; ;
    //   });
    // })
    // .catch((error) => {
    //   document.getElementById("business").innerHTML = "Failed to load news.";
    //   console.error(error);
    // }); 

    // //sports news
    //   fetch("https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=8404669fbb954e95bd7aace3abb30db0", requestOptions)
    // .then((response) => response.json())
    // .then((data) => { 
    //   document.getElementById("sports").innerHTML = "Sports News (" + data.articles.length + " articles)";
    //   data.articles.forEach(article => {
    //     document.getElementById("sports").innerHTML += ` <div> <li> 
    //       <img src="${article.urlToImage || ''}" alt="Image" />
    //       <li><a href="${article.url}" target="_blank">${article.title}</a></li>
    //       <p>${article.description || ''}</p>
    //     </li> </div>`; ;
    //   });
    // } )
    // .catch((error) => {
    //   document.getElementById("sports").innerHTML = "Failed to load news.";
    //   console.error(error);
    // });
    //   //technology news
    //  fetch("https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=8404669fbb954e95bd7aace3abb30db0", requestOptions)
    // .then((response) => response.json())
    // .then((data) => {
    //   document.getElementById("technology").innerHTML = "Technology News (" + data.articles.length + " articles)";
    //   data.articles.forEach(article => {
    //     document.getElementById("technology").innerHTML += ` <div> <li>     
    //       <img src="${article.urlToImage || ''}" alt="Image" />
    //       <li><a href="${article.url}" target="_blank">${article.title}</a></li>
    //       <p>${article.description || ''}</p>
    //     </li> </div>`; ;
    //   });
    // } )
    // .catch((error) => {
    //   document.getElementById("technology").innerHTML = "Failed to load news.";
    //   console.error(error);
    // });
showNews();

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




// function defaultNews() {
//     searchInput.value = "";
//     showNews(userChoose, currentPage);
//     searchButton.addEventListener("click", filterByUser);
// }

// defaultNews()