import React, { useState } from 'react'


const UserManagement = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: '',
        password: '',
        role: 'customer', //default role 
    });

    const users = [
        {
            _id: 123123,
            name: 'john doe',
            email: 'john@example.com',
            role: 'admin',
        },
    ]

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    }

    const handleRoleChange = (userId, newRole) => {
        console.log({Id: userId, role: newRole})
      
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)

        //Reset the form after submission
        setFormData({
            name:'',
            email:'',
            password:'',
            role:"customer"

        });
      
    };

    const handleDeleteUser = (userId) => {
        if(window.confirm('Are you sure you want to delete this User')) {
            console.log('deleting user with ID', userId)
        }
      
    }
    
    

    return (
        <div className='max-w-7xl mx-auto p-6'>
            <h2 className="text-2xl font-bold mb-4">User Management</h2>
            {/* add new user form  */}

            <div className="p-6 rounded-l mb-6">
                <h3 className="text-lg mb-4 font-bold">
                    Add New User
                </h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input type="text"
                            name='name' value={formData.name}
                            onChange={handleChange}
                            className='w-full p-2 border rounded'
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email"
                            name='email' value={formData.email}
                            onChange={handleChange}
                            className='w-full p-2 border rounded'
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input type="password"
                            name='password' value={formData.password}
                            onChange={handleChange}
                            className='w-full p-2 border rounded'
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Role</label>
                        <select type="text"
                            name='role ' value={formData.role}
                            onChange={handleChange}
                            className='w-full p-2 border rounded'>
                            <option value="customer">Customer</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <button type='submit' 
                    className='bg-green-500 py-2 px-4 text-white rounded hover:bg-green-600'>Add Users</button>

                </form>
            </div>

            {/* user list management  */}

            <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className='min-w-full text-left text-gray-500'>
                    <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                        <tr>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Email</th>
                            <th className="py-3 px-4">Role</th>
                            <th className="py-3 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user)=>(
                            <tr key={user._id}
                            className='border-b hover:bg-gray-50'>
                                <td className="p-4 text-gray-900 whitespace-nowrap">{user.name}</td>
                                <td className="p-4">{user.email}</td>
                                <td className="p-4">
                                    <select value={user.role} onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                    className='p-2 border rounded' >
                                        <option value="customer">Customer</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </td>
                                <td className="p-4">
                                    <button onClick={() => handleDeleteUser(user._id)}
                                        className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700'>Delete</button>
                                </td>
                              
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default UserManagement
