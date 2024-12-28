import { baseUrl } from "./baseUrl";

let form=document.getElementById("form");
let addbook=document.getElementById("gridcont");

//fetch the data
let loadBook=async ()=>{
    let res=await fetch("https://keen-abundant-thread.glitch.me");
    let books=await res.json();
     addbook.innerHTML="";
     

}






