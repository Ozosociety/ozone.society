import { eventsData } from "./eventsData.js"

let events = document.getElementById("event");

let generateEvent = () =>{
    return(events.innerHTML = eventsData.map((x) =>{
        return `   
        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
        <img src="assets/img/portfolio/${x.img}" class="img-fluid" alt="">
        <div class="portfolio-info">
          <h4>${x.name}</h4>
          <p>${x.year}</p>
          <a href="assets/img/portfolio/${x.img}" data-gall="portfolioGallery" class="venobox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
          <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>`
    }).join(""));
};

generateEvent();
