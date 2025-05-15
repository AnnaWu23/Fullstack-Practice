import React from 'react';
import CourseCard from './CourseCard';

const CourseCardList = ({ courses }) => {
    return (
        <div style={styles.courseList}>
        {courses.map((course) => (
            <CourseCard
              key={course.title}
              title={course.title}
              price={course.price}
              language={course.language}
              duration={course.duration}
              location={course.location}
              isNew={course.isNew}
              imageUrl={course.imageUrl}
            />
          ))}
          </div>
    )

}

export default CourseCardList;


const styles = {
    courseList: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px',
    }
}

  