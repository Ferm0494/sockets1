var socket = io()
    //On para escuchar..
socket.on("connect", () => {
    console.log('Conectado al servidor');
})

socket.on('disconnect', () => {
    console.log('perdimos conexion');
})

//Emit para enviar

socket.emit('enviarMensaje', {
    user: 'Ferm0494',
    mess: "Hola Mundo"
}, (resp) => {
    console.log(resp);
})

socket.on('enviarMensaje', (data) => {
    console.log(data);
})