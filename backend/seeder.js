const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Product = require("./models/Products") 
const User = require("./models/User")
const products = require("./data/products")

dotenv.config();

// connect moongose
 mongoose.connect(process.env.MONGO_URL)

// function to seed data
 const seedData = async () => {
    
 try {
    // clear  default admin user
    await Product.deleteMany()
    await User.deleteMany()

    //Create a default Admin user
    const createdUser = await User.create({
        name: "Admin User",
        email: "admin@gmail.com",
        password: "123456",
        role: "admin",        
    })

    // assign the default user ID to each product
    const userID = createdUser._id;

    const sampleProducts = products.map((product)=>{
            return {...product, user: userID};
    })

    // insert the products into database

    await Product.insertMany(sampleProducts)
    console.log("Product data seeded successfully")
    process.exit();

 } catch (error) {
    console.error("Error Seeding the data", error)
     process.exit(1)
 }
}

 seedData();