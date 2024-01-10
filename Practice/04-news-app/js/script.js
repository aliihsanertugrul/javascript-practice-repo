import { newsData } from "../data/news.js";

const loadData = () => {
	let strCol = "";

	newsData.forEach((item) => {
		strCol += createNewsItem(item);
	});

	document.getElementById("news").innerHTML = strCol;
};

const createNewsItem = (item) => {

    const likeText = createLikeText(item.like);

	return `
        <div class="col"  role="button">
            <div class="card h-100" data-id="${item.id}">
                <img src="${item.image}" class="card-img-top"/>
                <div class="card-body">
                    <h3 class="card-title">${item.title}</h3>
                    <div class="card-subtitle text-danger">${likeText}</div>
                    <p class="card-text">${item.description}</p>
                </div>
            </div>
        </div>
    `;
};

const createLikeText = (score, upLimit=5) => {
    let likeText = "";

    for(let i=0; i<upLimit; i++){
        if(i<score){
            likeText += '<i class="fa-solid fa-heart fa"></i> ';
        }
        else{
            likeText += '<i class="fa-regular fa-heart"></i> ';
        }
    }

    return likeText;
}

const createNewsDetails = (news) => {

    const likeText = createLikeText(news.like);

    return `
        <div class="col">
            <img src="${news.image}" alt="${news.title}" class="img-fluid">
        </div>
        <div class="col">
            <h2>${news.title}</h2>
            <span class="text-danger">${likeText}</span>
            <h6 class="my-3">${news.description}</h6>
            <p>${news.content}</p>
        </div>
    `;
}


document.querySelector("#news").addEventListener("click", (e)=>{
    const newsId = e.target.closest(".card").dataset.id;

    const selectedNews = newsData.find( (item) => item.id === Number(newsId))

    console.log(selectedNews)

    const newsDetailHtml = createNewsDetails(selectedNews);

    const newsDetail = document.getElementById("newsDetail");
    newsDetail.innerHTML = newsDetailHtml;

    window.scrollTo(0,0);

   // alert("Hello")
})




loadData();

/* console.log(document.querySelectorAll(".card"))

document.querySelectorAll(".card").forEach( (item)=> {
    item.addEventListener("click", ()=>{
        alert("Hello")
    })
} ) */
