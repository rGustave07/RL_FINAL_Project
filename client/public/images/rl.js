const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

var download = function(uri, filename, callback){
  request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
};

request('https://rocket-league.com/items', (err, res, body) => {
  if (err) {
    return console.error(err);
  }

  const $ = cheerio.load(body);

  $('.rlg-items-item').each(function() {
    const itemId = $(this).attr('id');
    const itemName = $(this).find('h2').text();
    const imgsrc = $(this).find('img').attr('src');
    const imgFilename = imgsrc.split('/').slice(-1).pop();

    const fullImageUrl = 'https://rocket-league.com' + imgsrc;

    console.log(itemId + ' - ' + itemName + ' - ' + imgFilename);

    download(fullImageUrl, path.resolve('bodies/', imgFilename), err => {
      if (err) {
        return console.error(err);
      }
    });
  });
});
