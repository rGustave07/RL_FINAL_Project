const router = require('express').Router();
const axios = require('axios');
const APIKEY = "3597323503c19f4b378b5125a8d0ee39053d967c";
const STEAMKEY = "61559FC24A7A28F1C4E55C92CFBFFE46";

const getGoals  = (req, res) => {
    let gas = ['assists', 'goals', 'mvps', 'saves', 'shots', 'wins'];
    let returnArr = {
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
                            returnArr.assists = response.data[0].value;
                            break;
                          case "goals":
                            returnArr.goals = response.data[0].value;
                            break;
                          case "mvps":
                            returnArr.mvps = response.data[0].value;
                            break;
                          case "saves":
                            returnArr.saves = response.data[0].value;
                            break;
                          case "shots":
                            returnArr.shots = response.data[0].value;
                            break;
                          case "wins":
                            returnArr.wins = response.data[0].value;
                            break;
                          default:
                          console.log("error");
                        }
                        if (returnArr.assists != null && returnArr.goals != null && returnArr.mvps != null && returnArr.saves != null &&
                            returnArr.shots != null && returnArr.wins != null) {
                                res.json(returnArr)
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
