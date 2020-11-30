function login(){
            var uname=document.getElementById('txtUname').value;
            var pwd=document.getElementById('txtpwd').value;
            var spObj=document.getElementById('SP1');
    if(uname == "8247729832" && pwd =="manoj@99")
    {
        spObj.style.color="green";
        spObj.innerHTML="<h1>Login Success!</h1>";
    }
    else
    {
        spObj.style.color="red";
        spObj.innerHTML="<h1> Login failed </h1>";
    }
              }

