require ('dotenv').config()     //now we can acess the api key
const app=require('./src/app')
app.listen(5000, () => {           //server will start on localhost:5000
    console.log('Server is running on http://localhost:5000')
})