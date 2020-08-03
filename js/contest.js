institute=localStorage.getItem('institute');
insShort=''
contest='july20b';
if(institute!==null)
{
    if(institute.length>25)
    {
        var i=0
        insShort=''
        while(1)
        {
            insShort+=institute[i]
            i++;
            if(i>25) break;
        }
        insShort+='...'
    }
    else insShort=institute;
    document.querySelector('#insname').innerHTML=insShort+'<i onclick="addins()" class="lni lni-pencil"></i>';
    rendersidebar();
}
else
{
    document.querySelector('#insname').innerHTML='<span id="addinsbtn" onclick="addins()"><i class="lni addinsplus lni-plus" ></i>Add institute</span>';
}

function addins()
{
    var inst=institute
    if(inst===null) inst=''
    institute=prompt('Enter your institute name exactly as listed on Codechef.',inst);
    localStorage.setItem('institute',institute);
    if(institute.length>25)
    {
        var i=0
        insShort=''
        while(1)
        {
            insShort+=institute[i]
            i++;
            if(i>25) break;
        }
        insShort+='...'
    }
    else insShort=institute;
    document.querySelector('#insname').innerHTML=insShort+'<i onclick="addins()" class="lni lni-pencil"></i>';
        rendersidebar();
}

async function rendersidebar()
{
    document.querySelector('#top10con').innerHTML='<span id="justasec">Just a second..</span>';

    url='https://rating-wiz.herokuapp.com/codechefcontest/'+contest+'/'+encodeURI( institute );
    resp=await fetch(url);
    resp=await resp.json()
    console.log(resp);
    var d=0
    var str=''

    for(j in resp)
    {
        console.log(resp[j].length);
        score=''
        if(d&&resp[j].length>3)
        {

            i=0;
            while(1)
            {
                // console.log(user.name[i]);
                if(resp[j][i]!='.') score+=resp[j][i];
                else break;
                i++;
            }
        }
        else score=resp[j]
    
        if(d)
        str+='<div class="participant"><span class="rank">#'+d+'</span>'+j+'<span class="score">'+score+' points</span></div>';
        d++;
    }
    document.querySelector('#top10con').innerHTML=str;
}

function selectcontest(no)
{
    document.querySelectorAll('.contest')[0].classList.remove('selected')
    document.querySelectorAll('.contest')[1].classList.remove('selected')
    document.querySelectorAll('.contest')[2].classList.remove('selected')

    document.querySelectorAll('.contest')[no].classList.add('selected')
    contest=document.querySelectorAll('.contest')[no].innerHTML;
    rendersidebar();
}

function hidesidebar()
{
    document.querySelector('.sidebarcon').style.display='none'
    // document.querySelector('.tabscon').style.display = 'block';
    // document.querySelector('.tabscon').style.transform = 'scale(1)';
    document.querySelector('.tabscon').style.opacity='1';

}
function showsidebar()
{
    document.querySelector('.sidebarcon').style.display='block'
    // document.querySelector('.tabscon').style.transform = 'opacity(0)';
    // document.querySelector('.tabscon').style.transform = 'scale(0)';

    openmenu(0);
}