let url =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0756f26cd16e45aba59e82c3fd4d0ce8";
let response = fetch(url);
console.log(response);
response
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    const contests = data.articles || [];
    console.log(contests);
    //console.log(typeof(contests));
    let ihtml = "";
    for (let item of contests) {
      console.log(item);
      if (item.author && item.title && item.description && item.urlToImage) {
        ihtml += `
      <div class="card mx-2 my-2">
        <img src="${item.urlToImage}" class="card-img-top card-image" alt="Image not found">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
          <a href="${item.url}" class="btn btn-danger my-4">Read More</a>
        </div>
      </div>
    `;
      }
    }
    document.getElementById("cardContainer").innerHTML = ihtml;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
