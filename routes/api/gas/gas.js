const router = require('express').Router();
const axios = require('axios');
const APIKEY = "3597323503c19f4b378b5125a8d0ee39053d967c";
const STEAMKEY = "61559FC24A7A28F1C4E55C92CFBFFE46";

const getGoals  = (req, res) => {
    let gas = ['assists', 'goals', 'mvps', 'saves', 'shots', 'wins'];
    let returnObj = {
        assists: null,
        goals: null,
        mvps: null,
        saves: null,
        shots: null,
        wins: null
    };
    axios.get(`https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${STEAMKEY}&vanityurl=${req.params.id}`)
         .then( response => {
            gas.forEach( element => {
                axios.get(`https://api.rocketleague.com/api/v1/steam/leaderboard/stats/${element}/${response.data.response.steamid}`, { headers: { Authorization: `Token ${ APIKEY }` } })
                     .then( (response) => {
                        switch (element) {
                          case "assists":
                            returnObj.assists = response.data[0].value;
                            break;
                          case "goals":
                            returnObj.goals = response.data[0].value;
                            break;
                          case "mvps":
                            returnObj.mvps = response.data[0].value;
                            break;
                          case "saves":
                            returnObj.saves = response.data[0].value;
                            break;
                          case "shots":
                            returnObj.shots = response.data[0].value;
                            break;
                          case "wins":
                            returnObj.wins = response.data[0].value;
                            break;
                          default:
                          console.log("error");
                        }
                        if (returnObj.assists != null && returnObj.goals != null && returnObj.mvps != null && returnObj.saves != null &&
                            returnObj.shots != null && returnObj.wins != null) {
                                res.json(returnObj)
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
