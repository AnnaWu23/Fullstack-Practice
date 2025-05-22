import React, { useState, useEffect } from 'react';
import CourseCardList from '../../course-card/src/components/CourseCardList';
import { fetchCoursesInfo } from '../../course-card/src/utils/courseInfo';
import './App.css';

function App() {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await fetchCoursesInfo();
      setCourseList(courses);
    };
    fetchCourses();
  }, []);
  return (
    <div className="App">
      <h1>Course List</h1>
      <CourseCardList courses={courseList} />
    </div>
  );
}

export default App;
