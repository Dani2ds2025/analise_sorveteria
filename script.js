//colocando as mesagens em um vetor ou array
let messages = [];

function addMensage(){
    const usernameInput = document.getElementById ('username');
    const massageInput = document.getElementById('massage ');


    const username = usernameInput.value.trim();
    const massage = massageInput.value.trim();

    if(!username || !massage){
        alert ('Por favor, preencha ambos os campos!');
        return;

    }


    const newMassage = {
        username: username,
        massage: massage,
        timestamp: new Date().toLocaleDateString([],{hour: '2-digit',  minute: '2-digit'})
    };

     messages.push(newMassage);

     updateChat();

massageInput.value = '';
messageInput.focus();
}

function updateChat(){

    const chatBody = document.getElementById('chat-body');
    chatBody.innerHTML = '';

    messages.forEach(msg=>  {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${msg.username}</td>
        <td>${msg.message}</td>
        <td class = "timestamp">${msg.timestamp}</td>`;
        chatBody.appendChild(row);



    })

}

document.getElementById('massage').addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addMensage();
    }
});