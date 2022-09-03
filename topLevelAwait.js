import mongoose from 'mongoose'

const math = await import("./math.js");

console.log(math.add(3,5))

const response =  await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await response.json()

console.log(data)

const db = await mongoose.connect('mongodb://localhost/mongotest')

console.log(db.connection.name) 