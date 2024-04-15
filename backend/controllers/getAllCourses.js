import { Course } from '../models/Course.js'

export const getAllCourses = async (req, res, next) => {

    try {
        const courses = await Course.find();

        res.status(200).json({
            success: true,
            courses,
        })
    }
    catch (error) {
        res.status(500).json({error: error.message});
        console.log('Error in getAllCourses', error.message)
    }
};