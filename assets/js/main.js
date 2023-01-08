// VARIAVEIS - START
var btn_maxView = document.getElementById('btn_maxView');
var btn_exitView = document.getElementById('btn_exitView');
var terminal = document.getElementById('terminal');
var content_data = document.getElementById('content_data');
var btn_openTerminal = document.getElementById('btn_openTerminal');
var navbar = document.getElementById('navbar');

var btn_apps = document.getElementById('btn_apps');
var span_apps = document.getElementById('span_apps');

var btn_exitViewPort = document.getElementById("btn_exitViewPort");
var btn_maxViewPort = document.getElementById('btn_maxViewPort');
var profile = document.getElementById("profile");
var btn_openProfile = document.getElementById("btn_openProfile");

var btn_exitViewProj = document.getElementById("btn_exitViewProj");
var btn_maxViewProj = document.getElementById('btn_maxViewProj');
var projetos = document.getElementById("projetos");
var btn_openProjetos = document.getElementById("btn_openProjetos");
// VARIAVEIS - END

// DISPLAY - START
terminal.style.display = "none";
profile.style.display = "none";
projetos.style.display = "none";
// DISPLAY - END

// HOVER NAVBAR - START

function hoverNavbar() {
    navbar.onmouseover = function opacity0Navbar() {
        navbar.style.opacity = 1;
    }
    navbar.onmouseout = function opacity1Navbar() {
        navbar.style.opacity = 0;
    }
}

function DestvHoverNavbar() {
    navbar.onmouseout = navbar.style.opacity = 1;
}
// HOVER NAVBAR - END

// HEADER - START
now = new Date;
dayName = new Array ("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")

content_data.innerHTML = dayName[now.getDay() ] + ", " + now.getDate() + " de " + monName[now.getMonth()] +  " de "  +     now.getFullYear ();
// HEADER - END

// PROFILE - START
btn_openProfile.onclick = function openProfile() {
    profile.style.transition = "ease 0.2s";
    profile.style.display = "block";
    hoverNavbar();
}

var verifMaxViewProf = false;
btn_maxViewPort.onclick = function maxViewPort() {
    if(verifMaxViewProf === false) {
        profile.style.transition = "ease 0.2s";
        profile.style.width = "100%";
        profile.style.height = "100vh";
        profile.style.marginTop = 0;
        navbar.style.transition = "ease 0.2s";
        navbar.style.display = "none";
        verifMaxViewProf = true;
    }else {
        var width = document.body.clientWidth;
        var styleWidth;
        var styleHeight;
        var styleMargin;
        if(width > 1023) {
            styleWidth = "900px";
            styleHeight = "500px";
            styleMargin = "50px auto";
        }else if(width <= 1023 && width >= 768) {
            styleWidth = "720px";
            styleHeight = "700px";
            styleMargin = "50px auto";
        }else if(width < 768) {
            styleWidth = "300px";
            styleHeight = "530px";
            styleMargin = "10px auto";
        }

        profile.style.width = styleWidth;
        profile.style.height = styleHeight;
        profile.style.margin = styleMargin;
        navbar.style.display = "block";
        verifMaxViewProf = false;
    }
}

btn_exitViewPort.onclick = function exitTerminalViewPort() {
    profile.style.display = "none";
    navbar.style.display = "block";
    
    if(profile.style.display === "block" || projetos.style.display === "block" || 
    terminal.style.display === "block"){
        hoverNavbar();
    }else{
        DestvHoverNavbar();
    }
}
// PROFILE - END

// PROJETOS - START

btn_openProjetos.onclick = function openProjetos() {
    projetos.style.transition = "ease 0.2s";
    projetos.style.display = "block";
    hoverNavbar();
}

var verifMaxViewProj = false;
btn_maxViewProj.onclick = function maxViewProj() {
    var width = document.body.clientWidth;
    if(verifMaxViewProj === false) {
        projetos.style.transition = "ease 0.2s";
        projetos.style.width = "100%";
        projetos.style.height = "100vh";
        document.querySelector('.projetos_painel').style.height = "100%";
        projetos.style.marginTop = 0;
        navbar.style.transition = "ease 0.2s";
        navbar.style.display = "none";
        verifMaxViewProj = true;
    }else {
        var width = document.body.clientWidth;
        var styleWidth;
        var styleHeight;
        var styleMargin;
        if(width > 1023) {
            styleWidth = "850px";
            styleHeight = "500px";
            styleMargin = "50px auto";
        }else if(width <= 1023 && width >= 768) {
            styleWidth = "720px";
            styleHeight = "500px";
            styleMargin = "50px auto";
        }else if(width < 768) {
            styleWidth = "300px";
            styleHeight = "500px";
            styleMargin = "10px auto";
        }

        projetos.style.width = styleWidth;
        projetos.style.height = styleHeight;
        projetos.style.margin = styleMargin;
        navbar.style.display = "block";
        verifMaxViewProj = false;
    }
}

btn_exitViewProj.onclick = function exitTerminalViewProj() {
    projetos.style.display = "none";
    navbar.style.display = "block";
    
    if(profile.style.display === "block" || projetos.style.display === "block" || 
    terminal.style.display === "block"){
        hoverNavbar();
    }else{
        DestvHoverNavbar();
    }
}

// HITNUMBER - START

function efectImgHitNumber1() {
    document.getElementById("img_HitNumber").src = "assets/images/hitnumber/img_HitNumber1.png";
    setTimeout("efectImgHitNumber2()", 2000);
}
function efectImgHitNumber2() {
    document.getElementById("img_HitNumber").src = "assets/images/hitnumber/img_HitNumber2.png";
    setTimeout("efectImgHitNumber3()", 2000);
}
function efectImgHitNumber3() {
    document.getElementById("img_HitNumber").src = "assets/images/hitnumber/img_HitNumber3.png";
    setTimeout("efectImgHitNumber1()", 2000);
}
// HITNUMBER - END

// PROJETOS - END

// TERMINAL - START
btn_openTerminal.onclick = function openTerminal() {
    terminal.style.transition = "ease 0.2s";
    terminal.style.display = "block";
    document.getElementById('inputEntrada').focus();
    hoverNavbar();
}

var verifMaxView = false;
document.getElementById('inputEntrada').focus();
btn_maxView.onclick = function maxView() {
    if(verifMaxView === false) {
        document.getElementById('inputEntrada').focus();
        terminal.style.transition = "ease 0.2s";
        terminal.style.width = "100%";
        terminal.style.height = "100vh";
        terminal.style.marginTop = 0;
        navbar.style.transition = "ease 0.2s";
        navbar.style.display = "none";
        verifMaxView = true;
    }else {
        var width = document.body.clientWidth;
        var styleWidth;
        var styleHeight;
        var styleMargin;
        if(width > 1023) {
            styleWidth = "700px";
            styleHeight = "400px";
            styleMargin = "100px";
        }else if(width <= 1023 && width >= 768) {
            styleWidth = "720px";
            styleHeight = "400px";
            styleMargin = "100px";
        }else if(width < 768) {
            styleWidth = "300px";
            styleHeight = "400px";
            styleMargin = "10px";
        }
        terminal.style.width = styleWidth;
        terminal.style.height = styleHeight;
        terminal.style.marginTop = styleMargin;
        navbar.style.display = "block";
        verifMaxView = false;
        document.getElementById('inputEntrada').focus();
    }
}

btn_exitView.onclick = function exitTerminalView() {
    terminal.style.display = "none";
    navbar.style.display = "block";
    
    if(profile.style.display === "block" || projetos.style.display === "block" || 
    terminal.style.display === "block"){
        hoverNavbar();
    }else{
        DestvHoverNavbar();
    }
}
// TERMINAL - END