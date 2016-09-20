const Promise = require('bluebird');
const mongoose   = require('mongoose');


exports.init = ()=>{

  return new Promise((resolve, reject)=>{

    mongoose.connect('mongodb://localhost/review_db');

    mongoose.connection.once('open', ()=>{

      resolve();

    });

    mongoose.connection.on('error', (err)=>{

      reject(err);

    });

  });

};