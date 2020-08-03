// HR ARRAYS AND FUNCTIONS REFER TO CODEFORCES IMPLEMENTATION..WHILE CF ONES ARE FOR CODECHEF!

heusers=[];
cfusers=[];
hrusers=[];

document.getElementsByClassName('flist')[1].innerHTML=''
document.getElementsByClassName('flist')[2].innerHTML=''
document.getElementsByClassName('flist')[0].innerHTML=''
// heusernames="ishaanmehta+tripathiharsh1991+saurabhshreyansh17+avanishcodes+aditya.paul18+#";
// cfusernames="ishaanmehta+harshtripath1+#"
// hrusernames="zemen+Gennady+#"

heusernames=localStorage.getItem('heusernames')
cfusernames=localStorage.getItem('cfusernames')
hrusernames=localStorage.getItem('hrusernames')

var i=-1;
username=""

function createfcard(user, site)
{
    name=''
    if(user.name.length>15)
    {
        i=0;
        while(1)
        {
            // console.log(user.name[i]);
            if(user.name[i]!=' ') name+=user.name[i];
            else break;
            i++;
        }
    }
    else name=user.name

    rating=''
    if(user.rating.length>4)
    {
        i=0;
        while(1)
        {
            // console.log(user.name[i]);
            if(user.rating[i]!='.') rating+=user.rating[i];
            else break;
            i++;
        }
    }
    else rating=user.rating

    src='<div class="friendcard activecard">'
    src+='<span class="ratingword ">Rating</span>'
    src+='<span class="fname">'+name+'<i class="lni none trash lni-trash"></i></span>'
    src+='<span class="fusername ">@'+user.username+'</span>'
    src+='<span class="frating">'+rating+'</span>'
    src+='</div>'

    return src;
}

async function fetchHE(user)
{
    // console.log(user);
    res=await fetch('https://cors-anywhere.herokuapp.com/www.hackerearth.com/@'+user);
    src=await res.text();
    var dom= new DOMParser;
    srcdom=dom.parseFromString(src,'text/html')
    name=srcdom.getElementsByClassName('name')[0].innerHTML;
    rating=srcdom.querySelector('body > div.page > div.layout-1 > div.left > div.link-section.standard-margin > div:nth-child(5) > span.track-following-num > a').innerHTML;
    // console.log(name+'  '+rating);
    var u={['name']: name, ['rating']: rating, ['username']:user}
    // console.log(u);
    heusers+=u;
    console.log(createfcard(u));
    document.getElementsByClassName('flist')[1].innerHTML+=createfcard(u);
}

async function fetchCF(user)
{
    res=await fetch('https://cors-anywhere.herokuapp.com/www.codechef.com/users/'+user);
    src=await res.text();
    var dom= new DOMParser;
    srcdom=dom.parseFromString(src,'text/html')
    name=srcdom.querySelector('body > main > div > div > div > div > div > header > h2').innerHTML;
    rating=srcdom.querySelector('.rating-number').innerHTML;
    console.log(name+'  '+rating);
    var u={['name']: name, ['rating']: rating, ['username']:user}
    // console.log(u);
    cfusers+=u;
    console.log(createfcard(u));
    document.getElementsByClassName('flist')[2].innerHTML+=createfcard(u);
}

async function fetchHR(user)
{
    res=await fetch('https://rating-wiz.herokuapp.com/codeforces/'+user);
    u=await res.text();
    u=JSON.parse(u);
    console.log(u);
  
    console.log(u.name+'  '+u.rating);
    var uu={['name']: u.name, ['rating']: u.rating, ['username']:user}
    // console.log(u);
    hrusers+=uu;
    console.log(createfcard(uu));
    document.getElementsByClassName('flist')[0].innerHTML+=createfcard(uu);
}

// async function fetchCF(user)
// {
//     res=await fetch('https://rating-wiz.herokuapp.com/codechef/'+user);
//         // res=await fetch('http://localhost:5000/codechef/'+user);
//     u=await res.text();
//     u=JSON.parse(u);
//     console.log(u);
  
//     console.log(u.name+'  '+u.rating);
//     var uu={['name']: u.name, ['rating']: u.rating, ['username']:user}
//     // console.log(u);
//     cfusers+=uu;
//     console.log(createfcard(uu));
//     document.getElementsByClassName('flist')[2].innerHTML+=createfcard(uu);
// }

// async function fetchHE(user)
// {
//     res=await fetch('https://rating-wiz.herokuapp.com/hackerearth/'+user);
//     u=await res.text();
//     u=JSON.parse(u);
//     console.log(u);
  
//     console.log(u.name+'  '+u.rating);
//     var uu={['name']: u.name, ['rating']: u.rating, ['username']:user}
//     // console.log(u);
//     heusers+=uu;
//     console.log(createfcard(uu));
//     document.getElementsByClassName('flist')[1].innerHTML+=createfcard(uu);
// }


while(1)
{
    i++;
    if(heusernames[i]!='+'&&heusernames[i]!='#') username+=heusernames[i];
    if(heusernames[i]=='+')
    {
        // u=fetchHE(username);
        console.log(username);
        username=""
    }
    if(heusernames[i]=='#') break;
}
username=''
console.log('cf');
i=-1;
while(1)
{
    i++;
    if(cfusernames[i]!='+'&&cfusernames[i]!='#') username+=cfusernames[i];
    if(cfusernames[i]=='+')
    {
        // fetchCF(username);
        console.log(username);
        username=""
    }
    if(cfusernames[i]=='#') break;
}


username=''
console.log('hr');
i=-1;
while(1)
{
    i++;
    if(hrusernames[i]!='+'&&hrusernames[i]!='#') username+=hrusernames[i];
    if(hrusernames[i]=='+')
    {
        // fetchHR(username);
        console.log(username);
        username=""
    }
    if(hrusernames[i]=='#') break;
}