import React, { useState } from 'react';
import CourseCard from './CourseCard';

const CourseCardList = ({ courses }) => {
  return (
    <div style={styles.courseList}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseCardList;

const styles = {
  courseList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
};
