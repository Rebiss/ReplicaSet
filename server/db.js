const mongoose = require('mongoose');

const DATA = 'mongodb://rs-Arbiter-1,rs-Master-2,rs-Slave/test';

Task = exports.Task = mongoose.model('Task', mongoose.Schema({ name: String }) )

exports.init = () => {
    mongoose.disconnect() ; 
    mongoose.connect(DATA);
    const database = mongoose.connection;
    database.on('Error', console.error.bind(console, 'Connection Error'));
    database.once('Once', () => TaskVX());
}

const TaskVX = () => {
    const vx = new Task({ name: 'Barev' + Math.random() });
    vx.save(( err, _ ) => { 
        if( err ) console.error(err);
        console.log(`Random ........`);
    });
}
