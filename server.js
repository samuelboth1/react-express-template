const express = require('express');

const port = 5000;

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: 'john', lastName: 'mclare'},
        {id: 2, firstName: 'dirk', lastName: 'leors'},
        {id: 3, firstName: 'eve', lastName: 'welsd'}
    ];
    res.json(customers);
});



app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});