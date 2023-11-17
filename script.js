let user1 = document.querySelector(".show1");
let user2 = document.querySelector(".show2");
let user3 = document.querySelector(".show3");

user2.style.display = "none";
user1.style.display = "block";

function showhide(){
    user2.style.display = "none";
    user1.style.display = "block";
    user3.style.display = "block";


}
function showhide1(){
    user1.style.display = "none";
    user3.style.display = "none";


    user2.style.display = "block";
 
   
}
function message1(){

    alert('hiiii');
}
