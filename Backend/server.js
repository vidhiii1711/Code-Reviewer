require ('dotenv').config()     //now we can acess the api key
const app=require('./src/app')
app.listen(5000, () => {           //server will start on https://code-reviewer-e3yq.onrender.com
    console.log('Server is running...')
})