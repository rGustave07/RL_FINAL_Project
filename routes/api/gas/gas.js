const router = require('express').Router();
const axios = require('axios');
const APIKEY = "3597323503c19f4b378b5125a8d0ee39053d967c";
const STEAMKEY = "61559FC24A7A28F1C4E55C92CFBFFE46";

const getGoals  = (req, res) => {
    let gas = ['assists', 'goals', 'mvps', 'saves', 'shots', 'wins'];
    let returnArr = [];
    axios.get(`https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${STEAMKEY}&vanityurl=${req.params.id}`)
         .then( response => {
                gas.forEach( stat => {
                    axios.get(`https://api.rocketleague.com/api/v1/steam/leaderboard/stats/${stat}/${response.data.response.steamid}`, { headers: { Authorization: `Token ${ APIKEY }` } })
                    .then((response) => {
                        returnArr.push(response)
                        if (returnArr.length === 6) {
                            res.json(returnArr);
                        }

                    })
                })
         })
         .catch( err => {
             if (err) {
                 console.log(err);
             }
         })
}

router.route('/:id')
      .get(getGoals);

module.exports = router;
