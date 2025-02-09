import { model, Schema } from 'mongoose'
import bcrypt from 'bcrypt';
// userSchema
const userSchema = new Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  accountType: { type: String, enum: ['user', 'admin'], default: 'user' },
  joinedAt: { type: Date, default: new Date() }
},
  { timestamps: true }
)

// Hashing the password before Saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next();
})
const User =model('User', userSchema);
// export { user }
export default User;