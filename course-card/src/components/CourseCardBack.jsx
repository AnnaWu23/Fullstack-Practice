import React from 'react';
import './CourseCard.css';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CourseCardBack = ({ flipToFront, review, setReview }) => {
  return (
    <div className="course-card course-card-back">
      <Typography variant="h6" sx={{ marginTop: '20px' }}>
        We'd love to hear from you!
      </Typography>
      <form className="review-form" onSubmit={flipToFront}>
        <TextField
          label="Review"
          multiline
          fullWidth
          variant="outlined"
          className="review-textfield"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CourseCardBack;
