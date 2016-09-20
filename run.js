const site = require('./site');
const db = require('./database');
const api = require('./api');

function init(){

  site.init()
    .then(api.init)
    .then(db.init)
    .then(api.initRoutes)
    .then(site.initRoutes)
    .then(()=>{

      console.log('Site and API are ready');
      require('./resources/article/article-model');

    })
    .catch((err)=>{

      console.log(err, err.stack);

    });

}

init();