if(sessionStorage.url == null && typeof(sessionStorage.url) == 'undefined') window.location.href = 'index.html';
if(sessionStorage.username == null && typeof(sessionStorage.username) == 'undefined') window.location.href = 'index.html';
if(sessionStorage.password == null && typeof(sessionStorage.password) == 'undefined') window.location.href = 'index.html';

function backup_passky(){

    if(sessionStorage.passwords == null || typeof(sessionStorage.passwords) == 'undefined'){
        window.location.href = 'index.html';
        return;
    }

    let passwords = JSON.parse(sessionStorage.passwords);
    for(let i = 0; i < passwords.length; i++) delete passwords[i]['id'];

    downloadObjectAsJson(passwords, "passky_" + getDate(new Date()));
}

function export_passky(){

    if(sessionStorage.passwords == null || typeof(sessionStorage.passwords) == 'undefined'){
        window.location.href = 'index.html';
        return;
    }

    let passwords = JSON.parse(sessionStorage.passwords);
    for(let i = 0; i < passwords.length; i++){
        delete passwords[i]['id'];
        passwords[i]['password'] = CryptoJS.AES.decrypt(passwords[i]['password'], sessionStorage.password).toString(CryptoJS.enc.Utf8);
    }

    downloadObjectAsJson(passwords, "passky_" + getDate(new Date()));
}