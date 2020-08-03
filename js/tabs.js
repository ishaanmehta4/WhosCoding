if (window.innerWidth < 800)
{
    document.querySelector('.hrcontainer').style.opacity='0';
    document.querySelector('.cfcontainer').style.opacity='0';
    document.querySelector('.hecontainer').style.opacity='0';
}
var cards=document.getElementsByClassName('cardcontainer');
var n=0;
function opentab(tabno)
{
    // console.log('tab '+tabno);
    cards[0].style.zIndex='10';
    cards[1].style.zIndex='10';
    cards[2].style.zIndex='10';

    cards[0].style.opacity='0';
    cards[1].style.opacity='0';
    cards[2].style.opacity='0';

    cards[0].style.top='10px';
    cards[1].style.top='10px';
    cards[2].style.top='10px';

    document.getElementsByClassName('tab')[0].classList.remove('activetab');
    document.getElementsByClassName('tab')[2].classList.remove('activetab');
    document.getElementsByClassName('tab')[1].classList.remove('activetab');
    document.getElementsByClassName('tab')[tabno].classList.add('activetab');

    document.getElementsByClassName('cardcontainer')[0].classList.remove('activecard');
    document.getElementsByClassName('cardcontainer')[2].classList.remove('activecard');
    document.getElementsByClassName('cardcontainer')[1].classList.remove('activecard');
    document.getElementsByClassName('cardcontainer')[tabno].classList.add('activecard');

    n=tabno;
    setTimeout(showcard,300);
}

function showcard()
{
    // n=0;
    // console.log('hi');
    cards[n].style.zIndex='20';
    cards[n].style.opacity='1';
    cards[n].style.top='0px';
}

if (window.innerWidth < 800) opentab(1);
