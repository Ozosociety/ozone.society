import { membersFirst } from "./membersData.js"; 
let members = document.getElementById("member1st");

let generateCard = () =>{
    return (members.innerHTML = membersFirst.map((x)=>{
        return `
        <div class="col-md-4">
        <div class="card">
            <div class="card-image" >
                <img src=assets/img/firstYear/${x.image} alt=${x.name} />
            </div>
            <div class="card-content d-flex flex-column align-items-center">
                <h4 class="pt-2">${x.name}</h4>
                <h5>${x.cid}</h5>
        
                <ul class="social-icons d-flex justify-content-center">
                    <li style="--i:1" target="_blank">
                        <a href=${x.fb}>
                        <iconify-icon icon="simple-icons:gmail"></iconify-icon>
                        </a>
                    </li>
                    <li style="--i:2">
                        <a href=${x.ln} target="_blank">
                        <i class="fa fa-linkedin" style="font-size:24px"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </div> 
`}).join(""));
};

generateCard();



 


{/* <div class="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/firstYear/${x.image}" class="img-fluid" alt=${x.name}>
                <div class="social">
                  
                  <a href=${x.ln}><i class="icofont-linkedin"></i></a>
                  <a href=${x.fb}>
                  <iconify-icon icon="simple-icons:gmail"></iconify-icon>
                  </a>
                </div>
              </div>
              <div class="member-info">
                <h4>${x.name}</h4>
		            <h6>${x.cid} </h6>
              
              </div>
            </div>
          </div> */}