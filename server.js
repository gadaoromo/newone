const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Now everything is solved');
});

app.listen(5000, () => {
    console.log('Whatt humble are you');
});
