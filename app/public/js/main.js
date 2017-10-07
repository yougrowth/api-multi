window.onload = function(){
    document.querySelector('.openNav').onclick = function(){
        document.querySelector('.sidenav').style.width = "280px";
        document.querySelector('#main').style.opacity = "0.4";
    };

    document.querySelector('.closebtn').onclick = function(){
        document.querySelector('.sidenav').style.width = "0px";
        document.querySelector('#main').style.opacity = "1";
    };
}