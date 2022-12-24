const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
{
    name: {
        type: String,
        required:[true,"Please add your name"]
    },
    email:{
        type: String,
        required: [true, "Please add your email"],
        unique: true,
        trim: true,
        match: 
            const validateEmail = (email) => {
                return String(email)
                  .toLowerCase()
                  .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
                    "Please enter a valid email"
                  )
              }
        
    },
    password: {
        type: String,
        required:[true,"Please add your password"],
        minLength: [8, "Password must be up to 6 characters"],
        maxLength: [23, "Password must be down to 23 characters"],
    }
},
{
    timestamps: true,
}
)

const User = mongoose.model("User", userSchema)
module.exports = User