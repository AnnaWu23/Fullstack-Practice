import React from 'react';
import './CourseCard.css';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const CourseCardBack = ({ course, flipToFront }) => {
  return (
    <div className="course-card">
      <h2>Leave your Review</h2>
      <form className="review-form" onSubmit={flipToFront}>
        <TextField label="Multiline" multiline maxRows={4} variant="outlined" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CourseCardBack;
