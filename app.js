// Progression 1: create a function and fetch the api using axios

function getData(){

  const Apikey="e38fcd862a6dd6b38b96e3908cedad09";
  const query = "Michaung";
  const Api=`https://gnews.io/api/v4/search?q=example&apikey=${Apikey}`;
  axios.get(Api).then((res)=>{
  let listOfArticles = res.data.articles;
  console.log(listOfArticles)
  listOfArticles.forEach((article)=>{

    let title = article.title;
    let img = article.image;
    let description = article.description;

    let titleTag = document.createElement("h3")
    let imgTag = document.createElement("img")
    let descriptionTag = document.createElement("p")

    titleTag.innerText = title;
    imgTag.src = img;
    descriptionTag.innerText = description;


    let articleBox = document.createElement("div");
    articleBox.setAttribute("class", "article");

    articleBox.append(titleTag, imgTag, descriptionTag);
    
    document.body.append(articleBox);
    console.log(article)


  })

}).catch((err)=>{
  console.log(err);
  })

}


getData();

  // let api= "https://gnews.io/api/v4/search?q=example&apikey=b6110f5e890a4b80a5b10e8df50842fb"

  // fetch(api).then((res)=>{
  //   console.log(res);
  //   let parsePromise=res.json();
  //   console.log(parsePromise);
  //   return parsePromise;
  // }).then((res)=>{
  //   console.log(res);
  // }).catch((err)=>{
  //   console.log(err.message);
  // })


// getData();

