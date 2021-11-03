const express = require('express')

const { sequelize, Fruit } = require('./models')

const app = express()
app.use(express.json())


app.post('/fruit', async (req, res, next) => {
    const { name, category, calories } = req.body;
    try {
        const fruit = await Fruit.create({ name, category, calories });
        return res.json(fruit);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

app.listen({ port: 5001 }, async () => {
    console.log('Server running on http://localhost:5001');
    await sequelize.sync({ force: true });
    console.log('Database synced!');
})
   
