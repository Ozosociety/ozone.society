import { membersSecond } from "./memberData2nd.js"; 
let members = document.getElementById("member2nd");

let generateCard = () =>{
    return (members.innerHTML = membersSecond.map((x)=>{
        return `
   <div class="col-lg-4">
    <div class="card">
        <div class="card-image">
            <img src=assets/img/secondyear/${x.image} alt="" />
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
</div>`}).join(""));
};

generateCard();
