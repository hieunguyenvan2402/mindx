import {mxFirebase} from './mx';
import './mx.css' ;
import './index.css' ;

import riot from 'riot';
import "./tags/homepage.tag";
import "./tags/football.tag";
import "./tags/basketball.tag";
import "./tags/volleyball.tag";
import "./tags/ghidanh.tag";
import "./tags/dkhlv.tag"
import route from "riot-route";


var firebaseConfig = {
  apiKey: "AIzaSyDlWq6qV75JXun8ER6R96E_sWwxFaSM7SU",
  authDomain: "hieu-camp-v2-2019.firebaseapp.com",
  databaseURL: "https://hieu-camp-v2-2019.firebaseio.com",
  projectId: "hieu-camp-v2-2019",
  storageBucket: "hieu-camp-v2-2019.appspot.com",
  messagingSenderId: "238210138694",
  appId: "1:238210138694:web:9d017ae6eb8a28a4"
};


mxFirebase.init(firebaseConfig);

route.base("/");

route("/home", () =>{
  const homePage = riot.mount("div#root","homepage");
  var slideIndex;
  // KHai bào hàm hiển thị slide
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      //tự động chuyển đổi slide sau 5s
      setTimeout(showSlides, 4000);
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 0);
 
 
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  document.getElementById("bongda").addEventListener("click",()=>{
    
      window.location.href = "/football";})
  document.getElementById("bongro").addEventListener("click",()=>{

     window.location.href = "/basketball";})  
  document.getElementById("bongchuyen").addEventListener("click",()=>{

      window.location.href = "/volleyball";})
  document.getElementById("dangki").addEventListener("click",()=>{
    window.location.href = "/dkhlv";
  })    
})

route("/football",() =>{
  const football = riot.mount("div#root","football");
  var slideIndex;
  // KHai bào hàm hiển thị slide
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      //tự động chuyển đổi slide sau 5s
      setTimeout(showSlides, 4000);
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 0);
 
 
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  // document.getElementById("dangky").addEventListener("click",()=>{
  //   window.location.href = "/DKHLV";
  // })
  document.getElementById("dangki").addEventListener("click",()=>{
    window.location.href = "/dkhlv";
  })
  document.getElementById("btn1").addEventListener("click",()=>{
    window.location.href = "/ghidanh";
  })
  document.getElementById("btn2").addEventListener("click",()=>{
    window.location.href = "/ghidanh";
  })
  document.getElementById("header").addEventListener("click",()=>{
    window.location.href = "/home";
  })
})



route("/basketball",() =>{
  const basketball = riot.mount("div#root","basketball");
  var slideIndex;
  // KHai bào hàm hiển thị slide
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      //tự động chuyển đổi slide sau 5s
      setTimeout(showSlides, 4000);
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 0);
 
 
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  document.getElementById("dangki").addEventListener("click",()=>{
    window.location.href = "/dkhlv";
  })
  document.getElementById("btn1").addEventListener("click",()=>{
    window.location.href = "/ghidanh";
  })
  document.getElementById("btn2").addEventListener("click",()=>{
    window.location.href = "/ghidanh";
  })
  document.getElementById("header").addEventListener("click",()=>{
    window.location.href = "/home";
  })
})







route("/volleyball",() =>{
  const volleyball = riot.mount("div#root","volleyball");
  var slideIndex;
  // KHai bào hàm hiển thị slide
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
 
      slides[slideIndex].style.display = "block";  
      dots[slideIndex].className += " active";
      //chuyển đến slide tiếp theo
      slideIndex++;
      //nếu đang ở slide cuối cùng thì chuyển về slide đầu
      if (slideIndex > slides.length - 1) {
        slideIndex = 0
      }    
      //tự động chuyển đổi slide sau 5s
      setTimeout(showSlides, 4000);
  }
  //mặc định hiển thị slide đầu tiên 
  showSlides(slideIndex = 0);
 
 
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  document.getElementById("dangki").addEventListener("click",()=>{
    window.location.href = "/DKHLV";
  })
  document.getElementById("btn1").addEventListener("click",()=>{
    window.location.href = "/ghidanh";
  })
  document.getElementById("btn2").addEventListener("click",()=>{
    window.location.href = "/ghidanh";
  })
  document.getElementById("header").addEventListener("click",()=>{
    window.location.href = "/home";
  })
})
route("/dkhlv", ()=>{
  const ghidanh = riot.mount("div#root","dkhlv");
  document.getElementById("sign-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const address = document.getElementById("address").value;
      const face = document.getElementById("face").value;
      const bai = document.getElementById("baitap").value;
      const hlv = document.getElementById("hlv_opt").value;
      console.log(hlv);
      const r = await mxFirebase.collection('data').save({
          name,
          email,
          phone,
          address,
          face,
          bai,
          hlv
      })
      console.log(r);
      window.location.href = "/home";

  })
  document.getElementById("header").addEventListener("click",()=>{
    window.location.href = "/home";})
})


route("/ghidanh", () =>{
  const ghidanh = riot.mount("div#root","ghidanh");
  document.getElementById("sign_up_form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("name_signup").value;
      const email = document.getElementById("email_signup").value;
      const phone = document.getElementById("sdt_signup").value;
      const address = document.getElementById("address_signup").value;
      const face = document.getElementById("facebook_signup").value;
      console.log(name);
      console.log(email);
      const r = await mxFirebase.collection('data').save({
          name,
          email,
          phone,
          address,
          face,
      })
      console.log(r);
      window.location.href = "/home";

  })
  document.getElementById("header").addEventListener("click",()=>{
    window.location.href = "/home";})
})
// document.getElementById("bongda").addEventListener("click",()=>{
//     window.location.href = "/football";})









route.start(true)

