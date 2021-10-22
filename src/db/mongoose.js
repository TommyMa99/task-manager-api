const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})


/*
task.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error', error)
})*/