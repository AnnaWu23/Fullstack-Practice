import React, { useState } from 'react';
import './CourseCard.css';
import { Button } from '@mui/material';
import { enrollCourse } from '../utils/courseInfo';
const CourseCardFront = ({ course, flipToBack, review }) => {
  const [enrolledCount, setEnrolledCount] = useState(course.enrolledCount);
  const [isEnrolling, setIsEnrolling] = useState(false);
  const handleEnroll = async () => {
    try {
      setIsEnrolling(true);
      const updatedCourse = await enrollCourse(course.id);
      setEnrolledCount(updatedCourse.enrolledCount);
    } catch (error) {
      console.error('Failed to enroll in course:', error);
      alert('Failed to enroll in course');
    } finally {
      setIsEnrolling(false);
    }
  };
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={course.imageUrl} alt={course.title} />
      </div>
      <div className="course-content">
        <div className="course-header">
          <div className="course-title">{course.title}</div>
          <div className="course-price">${course.price}</div>
        </div>
        <div className="course-info">
          <p className="course-language">Language: {course.language}</p>
          <p className="course-duration">Duration: {course.duration}</p>
          <p className="course-location">Location: {course.location}</p>
          <p className="course-difficulty">Difficulty: {course.difficulty}</p>
          <p className="course-enrolled-count">Enrolled: {enrolledCount}</p>
        </div>
        <div className="card-button">
          <Button onClick={handleEnroll} disabled={isEnrolling}>
            {isEnrolling
              ? 'Enrolling...'
              : course.difficulty === 'Beginner'
              ? 'Start Learning Now!'
              : 'Enroll Now'}
          </Button>
        </div>
        <div className="card-button">
          <Button onClick={flipToBack} disabled={review}>
            {review ? 'Successfully Reviewed!' : 'Leave a Review'}
          </Button>
        </div>

        {course.isNew && <span className="course-isNew">New!</span>}
      </div>
    </div>
  );
};

export default CourseCardFront;
