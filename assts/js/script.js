function slide()
{
    var bodyLogin = document.getElementById("body-login");
    var slideTime = 10000;
    var img = [];
  
    img[0] = "bg-1.jpg";
    img[1] = "bg-2.jpg";
    img[2] = "bg-3.jpg";

    i = 0;

    bodyLogin.style.backgroundImage = "url('assts/img/"+img[0]+"')";

    function rodarSlide()
    {
        
        if(i <3)
        {
            bodyLogin.style.backgroundImage = "url('assts/img/"+img[i]+"')";
            bodyLogin.style.transition = "background-image 0.5s ease-in-out";
            i=i+1;
        }
        else
        {
            i = 0;
        }        
    }

    setInterval(rodarSlide,slideTime);
}

function verSenha()
{
    verSenha = document.getElementById("input-password-form-login");
    
    verSenha.type = "text";
    
}