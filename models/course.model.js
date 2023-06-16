const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  course: {
    required: true,
    type: String,
    enum: ["Data Analyst", "Full Stock Web-Development", "Networking", "Database Engineering", "Frontend Frameworks"]
  },
  description: {
    required: true,
    type: String,
  },
  language: {
    required: true,
    type: String,
  },
  creatorId: {
    required: true,
    type: String
  },
  creatorName: {
    required: true,
    type: String
  },
  content: {
    type: [{
      videoName: {
        type: String,
        required: true
      },
      videoUrl: {
        type: String,
        required: true
      },
      postedAt: {
        type: Date,
        default: new Date()
      },
      likedBy: [
        {
          id: {
            type: String,
          },
          likeTime: {
            type: Date,
            default: new Date()
          }
        }
      ],
      comments: [
        {
          commentContent: {
            type: String,
          },
          likes: {
            type: Number,
            default: 0
          },
          commentBy: {
            type: String,
          },
          commentTime: {
            type: Date,
            default: new Date()
          }
        }
      ],
      shares: {
        type: Number,
        default: 0
      },
      thumbnailName: {
        type: String,
        required: true
      },
      thumbnailURL: {
        type: String,
        required: true
      }
    }]
  }
}, { versionKey: false });

const CourseModel = mongoose.model("course", courseSchema);

module.exports = { CourseModel }