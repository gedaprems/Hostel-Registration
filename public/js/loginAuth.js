// let loginButton = $("#loginButton").click(()=>{

// });

function login(){
    

    let userid = $("#userid").val();
    let password = $("#password").val();

    userid = userid.trim();
    var letters = /^[A-Za-z0-9]+$/;
    
    if(userid == "" && password == ""){
        alert("Please Enter Userid and Password!");
    }
    else if(userid == ""){
        alert("Userid should not be empty!");
    }
    else if(password == ""){
        alert("Password should not be empty");
    }
    else if(!userid.match(letters)){
        alert("Userid only contain Alphanumeric value");
    }else{
        $("#loginForm").submit();
    }
}