import React, { useState } from 'react';
import './CourseCard.css';
import CourseCardFront from './CourseCardFront';
import CourseCardBack from './CourseCardBack';

const CourseCard = ({ course }) => {
  const [isFront, setIsFront] = useState(true);
  const [review, setReview] = useState('');
  return isFront ? (
    <CourseCardFront
      course={course}
      flipToBack={() => setIsFront(false)}
      review={review}
    />
  ) : (
    <CourseCardBack
      course={course}
      flipToFront={() => setIsFront(true)}
      review={review}
      setReview={setReview}
    />
  );
};

export default CourseCard;
