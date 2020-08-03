var instate = [0, 0, 0];
if (window.innerWidth < 800) {
    document.getElementsByClassName('sitebg')[1].animationDelay = '0s'
}
else {
    document.querySelector('.menucon').style.opacity = '1'
}
var i = document.getElementsByClassName('addfriend')[x];

function handleplus(x) {
    // console.log(x);
    var i = document.querySelectorAll('.addfriend')[x];
    console.log(i.style.textSize);
    if (instate[x] == 0) {
        instate[x] = 1;
        document.getElementsByClassName('addbtn')[x].style.display='inline'
        document.getElementsByClassName('addplus')[x].style.right='12px'

        // document.getElementsByClassName('addbtn')[x].style.transform='scale(0)'
        document.getElementsByClassName('addbtn')[x].style.opacity='1'
        // document.getElementsByClassName('addbtn')[x].style.display='unset'
        i.style.width = "40%";
        i.style.padding = "10px";
        i.style.transform = 'scale(1)';
        i.style.border = "solid black 1px";
        document.querySelectorAll('.plusrotate')[x].style.transform = "rotate(-45deg)"
    }
    else {
        instate[x] = 0;
        i.style.width = "0px";
        // document.getElementsByClassName('addbtn')[x].style.transform='scale(0)'
        document.getElementsByClassName('addbtn')[x].style.opacity='0'
        document.getElementsByClassName('addbtn')[x].style.display='none'
        i.style.border = "none";
        i.style.transform = 'scale(0)';
        i.style.padding = "10px";
        // i.style.display="none";
        document.querySelectorAll('.plusrotate')[x].style.transform = "rotate(0deg)"
    }
}

//menuhandler
function openmenu(op=1) {
    var stage = document.getElementsByClassName('stagecon')[0].style;
    if (document.getElementById('menubtn').classList.contains('lni-menu')) {
        document.getElementById('menubtn').classList.add('lni-close');
        document.querySelector('.tabscon').style.opacity = '0';
        setTimeout(()=>{document.querySelector('.menucon').style.zIndex = '10';},1000)  

        if (window.innerWidth < 800)
            document.querySelector('.menucon').style.opacity = 1;
        document.getElementById('menubtn').classList.remove('lni-menu');
        if (window.innerWidth < 800)
            stage.transform = 'scale(0.90) translateX(75vw) rotate(4deg)';
        else
            stage.transform = 'scale(0.75) translateX(100px)';
    }
    else {
        // setTimeout(()=>{document.querySelector('.menucon').style.zIndex = '-1';},0)  
        document.querySelector('.menucon').style.zIndex = '-1';
        document.getElementById('menubtn').classList.remove('lni-close');
        document.querySelector('.tabscon').style.opacity = op;
        if (window.innerWidth < 800)
            setTimeout(() => { document.querySelector('.menucon').style.opacity = '0'; }, 1000)
        document.getElementById('menubtn').classList.add('lni-menu');
        stage.transform = 'none';
    }
}

function clearnreset()
{
    choice = confirm('Clicking OK will clear your existing friendlists and institute name.\nAre you sure?')
    if(choice)
    {
        localStorage.clear();
        location.reload();
    }
}