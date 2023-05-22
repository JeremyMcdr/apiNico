const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');
const companiesRoutes = require('./routes/companies'); // nouvellement ajouté
const usersAppRoutes = require('./routes/usersApp')
const loginRoutes = require('./routes/login')
const taskRoutes = require('./routes/tasks')

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/companies', companiesRoutes); // nouvellement ajouté
app.use('/api/usersApp', usersAppRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/tasks', taskRoutes)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
