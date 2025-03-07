import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  nickname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
}, { timestamps: true })

const User = mongoose.model("User", UserSchema)

export { User }
