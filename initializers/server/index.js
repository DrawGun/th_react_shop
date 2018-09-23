global.__SERVER__ = true;

const path = require('path');
const renderApp = require('./../../serverApp/renderApp').default;

const manifest = require('../../public/assets/manifest.json');

const port = 8080;

const express = require('express');
const application = express();

application.use(express.static(path.resolve(process.cwd(), 'public')));

application.set('views', __dirname);
application.set('view engine', 'ejs');

const webpackAsset = (bundle) => manifest[bundle];

application.get('*', (req, res) => {
  renderApp(req, res)
    .then((renderParams) => {
      const params = Object.assign({ webpackAsset }, renderParams);
      res.render('index', params);
    })
});

application.listen(port, function() {
  console.log(`Server listening on ${port}`);
});
