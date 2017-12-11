const router = require('express').Router();
const axios = require('axios');

const APIKEY = "3597323503c19f4b378b5125a8d0ee39053d967c";
const STEAMKEY = "61559FC24A7A28F1C4E55C92CFBFFE46";

const skillSearch = (req, res) => {
    axios.get(`https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${STEAMKEY}&vanityurl=${req.params.id}`)
         .then( response => {
                 axios.get(`https://api.rocketleague.com/api/v1/steam/playerskills/${response.data.response.steamid}`, { headers: { Authorization: `Token ${ APIKEY }` } })
                      .then((response) => {
                         const data = response.data[0].player_skills;
                         res.json(data);
                     })
         })
         .catch( err => {
             if (err) {
                 console.log(err);
             }
         })
}

router.route("/:id")
    .get(skillSearch);

module.exports = router;
