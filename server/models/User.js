const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    
    email: {
      type: String,
      required: true,
      unique: false,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

userSchema.pre('save', async function(next) {
  if(this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
})

userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password)
}

const User = model('User', userSchema);

module.exports = User;
