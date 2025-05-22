import React from 'react';
import './CourseCard.css';

const CourseCardFront = ({ course, flipToBack }) => {
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
          <button>
            {course.difficulty === 'Beginner'
              ? 'Start Learning Now!'
              : 'Enroll Now'}
          </button>
        </div>
        <div className="card-button">
          <button onClick={flipToBack}>Leave a Review</button>
        </div>

        {course.isNew && <span className="course-isNew">New!</span>}
      </div>
    </div>
  );
};

export default CourseCardFront;
