const { fork } = require ('child_process');
const path = require ('path');

class Random {

    getRandom(req, res) {
        res.render('random');
    }

    getNumber(req, res) {
        let param = req.query.number;
        child.send({ 'number': parseInt(param) })
        child.on('message', data => res.send(data));  
    }
}

module.exports = Random;