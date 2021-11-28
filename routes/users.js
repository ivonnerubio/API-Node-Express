import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "John",
        lastName: "Doe",
        age: 24
    }
]
// all routes below start with /users

router.get('/', (req, res) => {
    console.log(users);
    
    res.send(users);
});


router.post('/create')
export default router;