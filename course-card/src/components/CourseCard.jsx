import React, { useState } from 'react';
import './CourseCard.css';
import CourseCardFront from './CourseCardFront';
import CourseCardBack from './CourseCardBack';

const CourseCard = ({ course }) => {
  const [isFront, setIsFront] = useState(true);
  return isFront ? (
    <CourseCardFront course={course} flipToBack={() => setIsFront(false)} />
  ) : (
    <CourseCardBack course={course} flipToFront={() => setIsFront(true)} />
  );
};

export default CourseCard;
