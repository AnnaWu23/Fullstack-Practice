import React from 'react';
import './CourseCard.css';
import { Button } from '@mui/material';
const CourseCardFront = ({ course, flipToBack, review }) => {
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
        </div>
        <div className="card-button">
          <Button>
            {course.difficulty === 'Beginner'
              ? 'Start Learning Now!'
              : 'Enroll Now'}
          </Button>
        </div>
        <div className="card-button">
          <Button onClick={flipToBack}>
            {review ? 'Update your Review' : 'Leave a Review'}
          </Button>
        </div>

        {course.isNew && <span className="course-isNew">New!</span>}
      </div>
    </div>
  );
};

export default CourseCardFront;
