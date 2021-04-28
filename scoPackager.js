var scopackager = require('simple-scorm-packager');
var path = require('path');

  const config = {
    version: '1.2',
    organization: 'Familia',
    title: 'T-Datos-Personales',
    language: 'en-ES',
    masteryScore: 100,
    startingPage: 'index.html',
    source: path.join(__dirname, 'build'),
    package: {
      version: process.env.npm_package_version,
      zip: false,
      author: '',
      outputFolder: path.join(__dirname, 'scorm_packages'),
      description: '',
      keywords: ['scorm', 'test', 'course'],
      typicalDuration: 'PT0H5M0S',
      rights: `©${new Date().getFullYear()}`,
      vcard: {
        author: '',
        org: '',
        tel: '',
        address: '',
        mail: '',
        url: ''
      }
    }
  };

  scopackager(config, function(msg){
    console.log(msg);
    process.exit(0);
  });
