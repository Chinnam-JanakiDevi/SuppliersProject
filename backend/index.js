const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const suppliersList = require("./model/suppliersList")
const regTable = require("./model/userlogin")

const app = express();
const PORT = 7000;

app.use(cors({
    origin:["https://suppliers-project-backend.vercel.app"],
    methods:["post","get"],
    credentials:true
}));
// app.use(cors())
// ja@gmail.com
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Connection to cloud MongoDB with the correct database suppliersDB
const url = "mongodb+srv://gofood:mlRWAjwjIoCKM3TP@cluster0.5qbblkc.mongodb.net/suppliersDB?retryWrites=true&w=majority&appName=Cluster0/suppliersDB";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (err) => {
    console.error('Error connecting to MongoDB:', err);
});
db.once('open', () => {
    console.log('Connected successfully to MongoDB');
});
app.get("/",(req,res)=>{
    console.log("hello");
    res.json("hello")
})
app.post('/login', async (req, res) => {
    const { email, password } = req.body
    const details = {
        email: email,
        password: password
    };
    console.log(details);
    try {
        const loginuser = await regTable.findOne({ email: email });
        console.log(loginuser);
        if (loginuser.email === email && loginuser.password===password) {
            return res.status(201).json({ msg: "suucess" })
        }
        else {
            return res.status(409).json({ message: 'no data' });
        }
    }
    catch (error) {
        console.log("Erroor!");
        res.status(500).json({ message: 'Internal server error' });

    }
})

// POST endpoint to handle user registration
app.post('/users', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "https://suppliers-project-frontend.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    const { name, email, password } = req.body;
    const data = {
        name: name,
        email: email,
        password: password
    };

    try {
        // Check if the email already exists
        const existingUser = await regTable.findOne({ email: email });
        // console.log(existingUser);
        if (existingUser) {
            console.log("Email already exists");
            return res.status(409).json({ message: 'Email already exists' });
        }

        // If email does not exist, create a new user
        const user = new regTable(data);
        await user.save();

        console.log(`Received: Name - ${name}, Email - ${email}, Password - ${password}`);
        res.status(201).json({ message: 'User registered successfully', data: { name, email } });
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port  http://localhost:${PORT}`);
});



// // Checking if working or not
// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     email: String,
//     phoneNo: Number
// });

// // Creating a collection
// const Student = mongoose.model('Student', userSchema);

// const documents = async () => {
//     try {
//         const insert = new Student({
//             name: 'Janaki Devi',
//             age: 20,
//             email: 'janaki@gmail.com',
//             phoneNo: 1233332226
//         });
//         const insert1 = new Student({
//             name: 'Manvitha',
//             age: 20,
//             email: 'manvitha@gmail.com',
//             phoneNo: 9234512226
//         });

//         const result = await Student.insertMany([insert, insert1]);

//         console.log(result);

//     } catch (err) {
//         console.log(err);
//     }
// }
// documents();
