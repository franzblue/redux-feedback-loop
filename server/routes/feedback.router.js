const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('req.body', req.body);
    let newFeedback = req.body;
    console.log('Adding new feedback', newFeedback);
    let queryText = `
                    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [
        newFeedback.feeling, 
        newFeedback.understanding, 
        newFeedback.support, 
        newFeedback.comments
    ]).then(result => {
        console.log(result);
        res.sendStatus(201);
    }).catch(error => {
        console.log(error);
        res.sendStatus(500);
    })
})

router.get('/', (req, res) => {
    console.log('GET req.body', req.body);
    let queryText = 'SELECT * FROM "feedback" ORDER BY "id" DESC;';
    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting feedback from database', error);
        res.sendStatus(500);
    })
})

router.delete('/:idParam', (req, res) => {
    console.log("hello from DELETE", req.params.idParam);
    // res.sendStatus(200);
    let queryText = `DELETE FROM "feedback" WHERE "id" = $1`;

    pool.query(queryText, [req.params.idParam])
    .then((result) => {
        console.log('Success!', result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in delete', error);
        res.sendStatus(500)
    });
});

module.exports = router;