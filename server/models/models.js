var userSchema = mongoose.Schema({
  name: {type: String},
  email: {type: String}
}, {timestamps: true})

mongoose.model('User', userSchema);
