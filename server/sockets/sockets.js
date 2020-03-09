const { IO } = require('../server')

IO.on('connection', (client) => {
    console.log("Cliente conectado" + client);

    client.on('disconnect', () => {
        console.log('Client Disconnected');
    })

    client.on('enviarMensaje', (msj, callback) => {

        client.broadcast.emit('enviarMensaje', msj)
            // if (msj.user) {
            //     callback('todo salio bien!')

        // } else {
        //     callback('todo salio mal!')

        // }
    })
})