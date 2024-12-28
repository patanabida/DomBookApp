import { baseUrl } from "./baseUrl";

let form=document.getElementById("form");
form.addEventListener("submit",()=>{
    let email=form.email.value;
    let password=form.password.value;
    //console.log(email,password)
    fetch(`${baseUrl}/users`)
    .then(res=>res.json())
    .then(data=>{
        const loginData=data.filter((el,i)=>el.email==email)
        if(loginData.length!=0){
            //user present
            //check password
            if(users[0].password==password){
                alert("User Login Sucess...");
                localStorage.setItem("loginData",JSON.stringify(user[0]));
                window.location.href="books.html"
            }else {
                alert("password is worng, please login again...");
            }
            alert("Admin Login Sucess...");
                localStorage.setItem("loginData",JSON.stringify(user[0]));
                window.location.href="admin.html"
        }else {
            alert("password is worng, please login again...");
        }
            
        
    });
  

});





