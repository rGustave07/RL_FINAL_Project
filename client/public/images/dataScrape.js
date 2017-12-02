const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

var download = function(uri, filename, callback){
  request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
};
const allEnds = ["bodies","wheels","boosts","antennas","decals","toppers","trails","explosions","paints","banners"];

allEnds.map((e) => {
  request(`https://rocket-league.com/items/${e}/`, (err, res, body) => {
    if (err) {
      return console.error(err);
    }

    const $ = cheerio.load(body);

    let names = [];
    $(".item-omg-wtf-bbq").each(function() {
      let name = $(this).attr("data-name");
      let $2 = cheerio.load($(this).html());
      let imgSrc = $2("img").attr("src");
      const fullImageUrl = "https://rocket-league.com" + imgSrc;
      names.push(name);
      let noSpaces = name.replace(/[ \/]/g,"_");


      download(fullImageUrl, path.join(__dirname,`images/${e}/`, `${noSpaces}.png`), err => {
        if(err) {
          return console.log(err);
        }
      });
    });
    fs.writeFileSync(path.join(__dirname, "csv",`${e}.csv`), names.join("\n"));
  });
});


