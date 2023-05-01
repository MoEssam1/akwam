var api_key="api_key=d8146d3797f191d0ed09c3cf1968b470";
var Base_url="https://api.themoviedb.org/3";
var api_url=Base_url+"/movie/popular?"+api_key+"&language=en-US&page=1";
var img_url="https://image.tmdb.org/t/p/w500";
function getMovies() {
  fetch(api_url)
  .then(res=>res.json())
  .then(data=> {
    showMovie(data.results);
})
}

function showMovie(movies) {
    const main_div=document.querySelector(".movies");
    const arr=Array.from(movies);
    arr.forEach(movie=>{
        const {poster_path,title,vote_average}=movie;
        const div=document.createElement("div");
        div.className="box";
        div.classList.add("col-lg-auto");div.classList.add("col-md-3");
        div.innerHTML=`  <img src="${img_url+poster_path}" alt="">
        <div class="head">
          <div class="quality">
            <p>WEB-DL</p>
          </div>
           <div class="rating">
            <p><i class="fa-sharp fa-solid fa-star " style="color: #ffab31;"></i></p>
            <p>${vote_average}</p>
          </div>
        </div>
        <div class="hidden position-absolute top-50 start-50 ">
           <i class="fa-solid fa-play"></i>
           <p>مشاهدة</p>
        </div>
        <div class="title position-absolute start-0 ">
           <p id="tit">${title}</p>
        </div>`;
        main_div.appendChild(div);
    })
    hover();
}
getMovies();
function hover(){
    var box=document.getElementsByClassName("box");
     for (var i = 0; i <box.length; i++) {
        const parent=box[i];
        const hidden=parent.querySelector('.hidden');
        const title_d=parent.querySelector('.title');
        const movie_title=parent.querySelector("#tit");

        box[i].addEventListener('mouseover', function handleMouseOver(){
            hidden.style.transform="translateY(150px)"
            hidden.style.transition= ".8s";
            title_d.style.background="linear-gradient(to top,black,transparent)";
            title_d.style.transform= "translateY(-70px)";
            title_d.style.transition= "1s";
            movie_title.classList.add("top");
         })
         box[i].addEventListener('mouseout', function handleMouseOut() {
             hidden.style.transform="translateY(0px)"
             title_d.style.background="none";
             title_d.style.transform= "translateY(0px)";
             title_d.style.transition= "1s";
         })
     }
}
