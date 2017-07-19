import mongoose, { Schema } from 'mongoose';

const postSchema = new Schema({
  title: { type: String, default: '', trim: true },
  body: { type: String, default: '', trim: true },
  // user: { type: Schema.ObjectId, ref: 'User' },
  comments: [
    {
      body: { type: String, default: '' },
      // user: { type: Schema.ObjectId, ref: 'User' },
      createdAt: { type: Date, default: Date.now },
    },
  ],
  // tags: { type: [], get: getTags, set: setTags },
  // image: {
  //   cdnUri: String,
  //   files: [],
  // },
  createdAt: { type: Date, default: Date.now },
});

/**
 * Validations
 */

postSchema.path('title').required(true, 'Post title cannot be blank');
postSchema.path('body').required(true, 'Post body cannot be blank');

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
