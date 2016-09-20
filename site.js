const express = require('express');
const Promise = require('bluebird');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs');

exports.init = (cb) => {

  return new Promise((resolve, reject)=>{

    app.listen(3011, (err)=>{

      if(err) return reject(err);

      resolve('Hello');

      if(cb) cb();

    });

  });

};

exports.initRoutes = () => {


  app.get('/', (req, res)=>{

    const Article = mongoose.model('Article');

    Article.find()
      .then((docs)=>{

        res.render('articles', { articles:docs });

      });

  });

};



