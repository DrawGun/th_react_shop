const manifest = require('../../public/assets/manifest.json');

const port = 8080;

const express = require('express');
const application = express();

application.use(express.static('public'));

application.set('views', __dirname);
application.set('view engine', 'ejs');

const webpackAsset = (bundle) => manifest[bundle];

application.get('*', (req, res) => {
  res.render('index', { webpackAsset });
});

application.listen(port, function() {
  console.log(`Server listening on ${port}`);
});
