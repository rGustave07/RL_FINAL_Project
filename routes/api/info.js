const router = require('express').Router();
const axios = require('axios');

const APIKEY = "3597323503c19f4b378b5125a8d0ee39053d967c";

const skillSearch = (req, res) => {
    axios.get(`https://api.rocketleague.com/api/v1/steam/playerskills/${req.params.id}`, { headers: { Authorization: `Token ${ APIKEY }` } })
        .then((response) => {
            const data = response.data[0].player_skills;
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
}

router.route("/:id")
    .get(skillSearch);

module.exports = router;
