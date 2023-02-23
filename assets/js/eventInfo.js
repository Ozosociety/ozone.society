import { eventInfoData } from "./eventInfoData.js";

let eventInfo = document.getElementById("row");

let generateEventInfo = () =>{
    return(eventInfo.innerHTML = eventInfoData.map((x) =>{
        return `
            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="${x.delay}">
            <div class="icon-box">
              <div class="icon"><i class="bx ${x.class}"></i></div>
              <h4><a href="">${x.name}</a></h4>
              <p>${x.info}</p>
            </div>
          </div>

        `
    }).join(""));
};


generateEventInfo();