const express = require('express');
const Promise = require('bluebird');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

exports.init = () => {

  return new Promise((resolve, reject)=>{

    app.listen(3010, (err)=>{

      if(err) return reject(err);

      resolve('Hello');

    });

  });

};

exports.initRoutes = () => {


  app.post('/api/article', (req, res)=>{

    const Article = mongoose.model('Article');

    const article = new Article(req.body);

    article.save()
      .then(()=>{

        res.send(article);

      });

  });

};



