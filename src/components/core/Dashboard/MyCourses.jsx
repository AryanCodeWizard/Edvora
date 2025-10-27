import React, { useEffect } from 'react'

import CourseTable from './InstructorCourses/CourseTable';
import IconBtn from '../../common/IconBtn';
import { fetchInstructorCourses } from '../../../services/operations/courseDetailsAPI';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const MyCourses = () => {
    const { token } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.profile);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetchInstructorCourses(token);
                if (response) {
                    setCourses(response);
                }
            }
            catch (error) {
                console.error("Error fetching courses:", error);
            }
        }
        fetchCourses();
    }, [])
    return (
        <div>
            <div>
                <h1>MyCourses</h1>
                <IconBtn
                text="Create New Course"
                onClick={() => navigate("/dashboard/add-course")}
                />
            </div>
            {
                courses && <CourseTable courses={courses} setCourses={setCourses} />
            }
        </div>
    )
}

export default MyCourses