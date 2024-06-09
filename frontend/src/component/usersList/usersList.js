import { useState, useEffect } from 'react';
import './usersList.css';
import AdminNav from '../adminNavbar/adminNav';
import axios from 'axios';

const UpdateUserModal = ({ user, onClose, onUpdate }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [contact, setContact] = useState(user.contact);
    const [placeORcollege, setPlaceORcollege] = useState(user.placeORcollege);
    const [amount, setAmount] = useState(user.amount);
    const [freeToday, setFreeToday] = useState(user.freeToday);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://suppliers-projectbackend.vercel.app/updateUser/${user._id}`, {
                name,
                email,
                contact,
                placeORcollege,
                amount,
                freeToday
            });
            console.log(response.data);
            onUpdate();
            onClose();
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <form onSubmit={handleUpdate}>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
                    <label>Contact</label>
                    <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
                    <label>Place/College</label>
                    <input type="text" value={placeORcollege} onChange={(e) => setPlaceORcollege(e.target.value)} />
                    <label>Amount</label>
                    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <label>Free Today</label>
                    <select value={freeToday} onChange={(e) => setFreeToday(e.target.value)}>
                        <option value="True">True</option>
                        <option value="False">False</option>
                    </select>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.post('https://suppliers-projectbackend.vercel.app/fetchData');
                if (response.data.data !== 'not found') {
                    setUsers(response.data.data);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`https://suppliers-projectbackend.vercel.app/deleteUser/${id}`);
            console.log(response.data);
            setUsers(users.filter(user => user._id !== id));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const handleUpdateClick = (user) => {
        setSelectedUser(user);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
    };

    const handleUpdate = async () => {
        const response = await axios.post('https://suppliers-projectbackend.vercel.app/fetchData');
        if (response.data.data !== 'not found') {
            setUsers(response.data.data);
        }
    };

    return (
        <>
            <AdminNav />
            <table className="tbl">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Place</th>
                        <th>Amount</th>
                        <th>Free Today</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.contact}</td>
                                <td>{user.placeORcollege}</td>
                                <td>{user.amount}</td>
                                <td>{user.freeToday}</td>
                                <td>
                                    <button className="btn_edit" onClick={() => handleUpdateClick(user)}><i className="fa fa-edit"></i></button>
                                </td>
                                <td>
                                    <button className="btn_trash" onClick={() => handleDelete(user._id)}><i className="fa fa-trash"></i></button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">No users found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {selectedUser && (
                <UpdateUserModal user={selectedUser} onClose={handleCloseModal} onUpdate={handleUpdate} />
            )}
        </>
    );
};
