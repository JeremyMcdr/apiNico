const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');
const entrepriseRoutes = require('./routes/entreprises'); // nouvellement ajouté

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/entreprises', entrepriseRoutes); // nouvellement ajouté

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
