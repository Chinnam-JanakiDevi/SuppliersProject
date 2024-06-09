const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const suppliersList = require("./model/suppliersList")
const regTable = require("./model/userlogin")
const bookTable = require("./model/bookingForm")

const app = express();
const PORT = 7000;

app.use(cors({
    origin:["https://businessproject-jet.vercel.app"],
    methods:["post","get"],
    credentials:true
}));
// app.use(cors())
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
app.get("/", (req, res) => {
    console.log("hello");
    res.json("hello")
})
app.post('/login', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "https://businessproject-jet.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    const { email, password } = req.body
    const details = {
        email: email,
        password: password
    };
    console.log(details);
    try {
        const loginuser = await regTable.findOne({ email: email });
        console.log(loginuser);
        if (loginuser.email === email && loginuser.password === password) {
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
    res.setHeader("Access-Control-Allow-Origin", "https://businessproject-jet.vercel.app");
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

app.post('/userdetails', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "https://businessproject-jet.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    const { name, data, placeORcollege, contact, amount, freeToday } = req.body;
    const data1 = {
        name: name,
        email: data,
        placeORcollege: placeORcollege,
        contact: contact,
        amount: amount,
        freeToday: freeToday
    };
    console.log(data1);
    const existingUser = await suppliersList.findOne({ email: data });
    // console.log(existingUser);
    if (existingUser) {
        const updatedUser = await suppliersList.findOneAndUpdate(
            { email: data },
            { name, placeORcollege, contact, amount, freeToday },
            { new: true }
        );
        console.log("updated");
        return res.status(201).json({ data: 'updated' });
    }
    else {
        try {

            // If email does not exist, create a new user
            const user = new suppliersList(data1);
            await user.save();
            res.status(201).json({ message: 'User details updated successfully', data: { name } });
        } catch (err) {
            console.error("Error occurred:", err);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
});

app.post('/checkuser', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "https://businessproject-jet.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    const { email } = req.body;
    console.log(email);
    const data = {
        email: email,
    };

    try {
        console.log(email);
        const existingUser = await suppliersList.findOne({ email: email });
        // console.log(existingUser);
        if (existingUser) {
            console.log("Email already exists");
            return res.status(201).json({ data: 'Email already exists', details: existingUser });
        }
        else {
            return res.status(201).json({ data: 'not found', details: existingUser });

        }
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/booking', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "https://businessproject-jet.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    const {name,eventname,contact,message}= req.body
    const data ={
        name:name,
        eventname:eventname,
        contact:contact,
        message:message
    }
    try {
        const user = new bookTable(data);
        await user.save();
        res.status(201).json({ message: 'User details updated successfully'});
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/fetchData', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "https://businessproject-jet.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    try {
        const allUsers = await suppliersList.find({});  // Fetch all users
        if (allUsers.length > 0) {
            return res.status(200).json({ data: allUsers });
        } else {
            return res.status(404).json({ data: 'No users found' });
        }
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).json({ message: 'Internal server error' });
    }
});
app.delete('/deleteUser/:id', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "https://businessproject-jet.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    const { id } = req.params;
    try {
        const deletedUser = await suppliersList.findByIdAndDelete(id);
        if (deletedUser) {
            return res.status(200).json({ message: 'User deleted successfully' });
        } else {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).json({ message: 'Internal server error' });
    }
});
// Update user details
app.put('/updateUser/:id', async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "https://businessproject-jet.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    const { id } = req.params;
    const { name, email, contact, placeORcollege, amount, freeToday } = req.body;

    try {
        const updatedUser = await suppliersList.findByIdAndUpdate(
            id,
            { name, email, contact, placeORcollege, amount, freeToday },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully', data: updatedUser });
    } catch (err) {
        console.error('Error occurred:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post("/onlineBookedList",async(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "https://businessproject-jet.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    try{
    const bookedlist =await bookTable.find({})
    console.log(bookedlist);
    res.status(200).json({ message: 'Users retrieved', data: bookedlist });
    }
    catch(error){
        console.log(error);
    }
})

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
