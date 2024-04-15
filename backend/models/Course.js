import mongoose from "mongoose";

const schema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Please enter courses title'],
        minLength: [4, 'Title must be atleast 4 characters'],
        maxLength: [80, 'Title must be atleast 80 characters'],
    },

    description: {
        type: String,
        required: [true, 'Please enter courses description'],
        minLength: [10, 'Title must be atleast 10 characters'],
    },

    lectures: [
        {
            title: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            video: {
                public_id: {
                    type: String,
                    required: true,
                },
                url: {
                    type: String,
                    required: true,
                },
            },
        },
    ],

    poster: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },

    views: {
        type: Number,
        default: 0,
    },

    numOfVideos: {
        type: Number,
        default: 0,
    },

    category: {
        type: String,
        default: 0,
    },

    createdBy: {
        type: String,
        required: [true, 'Enter Course Creator Name']
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Course = mongoose.model('course', schema);