const express = require('express');

const path = require('path');
const socketIO = require('socket.io')
const http = require('http')

const app = express();
const server = http.createServer(app)

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;




let IO = socketIO(server)

module.exports = {

    IO

}
require('./sockets/sockets')











app.use(express.static(publicPath));



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});