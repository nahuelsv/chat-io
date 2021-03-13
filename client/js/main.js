'use strict'

const socket = io.connect('http://localhost:4400',{'forceNew': true});

socket.on('messages', (data) => {
    render(data);
})

function render(data){
    let html = data.map(
        (message, index)=>{
        return (`
            <div class="message">
                <strong>${message.nickname}</strong>: 
                <span>${message.text}</span>
            </div>
        `)
    }).join('\n');

    let divMessage = document.getElementById('messages');
    divMessage.innerHTML = html;
    divMessage.scrollTop = divMessage.scrollHeight;
}

function sendMessage(event){
    let payload = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    };

    document.getElementById('nickname').style.display = 'none';

    socket.emit('add-message', payload);

    document.getElementById('text').value = "";
    return false;
}