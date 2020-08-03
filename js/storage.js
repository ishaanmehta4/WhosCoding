function init() {
    t1 = localStorage.getItem('heusernames')
    t2 = localStorage.getItem('cfusernames')
    t3 = localStorage.getItem('hrusernames')

    if (t1 === null) localStorage.setItem('heusernames', '#')
    if (t2 === null) localStorage.setItem('cfusernames', '#')
    if (t3 === null) localStorage.setItem('hrusernames', '#')
}

function addhackerearth() {
    newuser = document.getElementsByClassName('addfriend')[1].value
    if (newuser !== '') {

        users = localStorage.getItem('heusernames')
        if (users === null) users = '#'
        console.log(users);
        temp = ''
        i = -1
        while (1) {
            i++
            if (users[i] != '#') temp += users[i]
            else break
        }
        users = temp + newuser + '+#';
        console.log(newuser + ' added to hackerearth');
        localStorage.setItem('heusernames', users)
        fetchHE(newuser)
    }

    else console.log('cant add blank'); 
    document.getElementsByClassName('addfriend')[1].value = ''
}

function addcodechef() {
    newuser = document.getElementsByClassName('addfriend')[2].value
    if (newuser !== '') {

        users = localStorage.getItem('cfusernames')
        if (users === null) users = '#'
        console.log(users);
        temp = ''
        i = -1
        while (1) {
            i++
            if (users[i] != '#') temp += users[i]
            else break
        }
        users = temp + newuser + '+#';
        fetchCF(newuser)
        console.log(newuser + ' added to codechef');
    localStorage.setItem('cfusernames', users)

    }
    else console.log('cant add blank');
    document.getElementsByClassName('addfriend')[2].value = ''

}

function addcodeforces() {
    newuser = document.getElementsByClassName('addfriend')[0].value
    if (newuser !== '') {

        users = localStorage.getItem('hrusernames')
        if (users === null) users = '#'
        console.log(users);
        temp = ''
        i = -1
        while (1) {
            i++
            if (users[i] != '#') temp += users[i]
            else break
        }
        users = temp + newuser + '+#';
        fetchHR(newuser)
        console.log(newuser + ' added to codeforces');
    localStorage.setItem('hrusernames', users)

    }
    else console.log('cant add blank');
    document.getElementsByClassName('addfriend')[0].value = ''

}

init();