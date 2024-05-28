const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const suppliersList = require("./model/suppliersList"); // Ensure this path is correct
const regTable = require("./model/userlogin"); // Ensure this path is correct

const app = express();
const PORT = 7000;

// Use cors middleware for handling CORS issues
app.use(cors({
    origin: "https://businessproject-jet.vercel.app",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get("/", (req, res) => {
    console.log("hello");
    res.json("hello");
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const details = { email, password };

    console.log(details);

    try {
        const loginuser = await regTable.findOne({ email: email });
        if (!loginuser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, loginuser.password);
        if (isPasswordValid) {
            return res.status(200).json({ msg: "success" });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/users', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await regTable.findOne({ email: email });
        if (existingUser) {
            console.log("Email already exists");
            return res.status(409).json({ message: 'Email already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // If email does not exist, create a new user
        const user = new regTable({ name, email, password: hashedPassword });
        await user.save();

        console.log(`Received: Name - ${name}, Email - ${email}`);
        res.status(201).json({ message: 'User registered successfully', data: { name, email } });
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
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
