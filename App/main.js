const express = require('express')
const app = express()
const EventEmitter = require('events');
const { addListener } = require('process');

class MyEventEmitter extends EventEmitter { }

const Emiiter = new MyEventEmitter();

/**
 * @description com o modulo events podemos emitir eventos dentro de nossa aplicação sem a precisa d
 * um módulo externo. 
 */

/**
 * @DOCUMENTATION https://nodejs.org/api/events.html#events_eventemitter_defaultmaxlisteners
 */

/**
 * @description 
 * @method ONCE Sera executado apenas uma vez, contrario ao ON que fica ouvindo todos os EMITS
 */

Emiiter.once('apenasumavez', (data, event) => {
    // esse ouvinte é executado apenas uma vez.
    console.log(data, event)
})


/**
 * @description 
 * @method process.nexttick() AGENDA A FUNCÃO DE RETORNO PARA SER EXECUTADA NA PRÓXIMA ITERAÇÃO 
 * DO EVENT LOOP ( LISTA DE EVENTOS ) 
 */

process.nextTick(() => {
    myEE.emit('bar');
    myEE.emit('foo');
});


/**
 * @description ouvindo o evento.
 */
Emiiter.on('connected', ({ username, email }) => {
    console.log('user : ' + username + 'e-mail : ' + email)
})


/**
 * @description emitindo um evento quando o usuario se loga na aplicação.
 */

app.get('/', function (req, res) {
    Emiiter.emit('connected', { username: 'kaique', email: 'kaic@kaic.kaic' })
    Emiiter.emit('apenasumavez', 'so é executado uma vez');
})

app.get('/', function (req, res) {
    res.send('Hello World')
})

/**
 * @method REMOVE remove uma unica instância do ouvinte na fila.
 */

Emiiter.removeAllListeners('myEvent');


app.listen(3000)
