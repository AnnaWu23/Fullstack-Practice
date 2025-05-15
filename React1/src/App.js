import React from 'react';
import CourseCardList from './components/CourseCardList';
import './App.css';

function App() {
  const courses = [
    {
      title: 'React',
      price: 100,
      language: 'English',
      duration: '10 hours',
      location: 'New York',
      isNew: true,
      // Current time as seed for random image
      imageUrl: `https://picsum.photos/seed/${new Date().getTime()}/300/200`,
    },
    {
      title: 'React Native',
      price: 200,
      language: 'Chinese',
      duration: '10 hours',
      location: 'New York',
      isNew: false,
      imageUrl: `https://picsum.photos/seed/${
        new Date().getTime() + 1
      }/300/200`,
    },
    {
      title: 'Frontend Development',
      price: 299,
      language: 'Chinese',
      duration: '20 hours',
      location: 'Beijing',
      isNew: true,
      imageUrl: `https://picsum.photos/seed/${
        new Date().getTime() + 2
      }/300/200`,
    },
    {
      title: 'Full Stack Development',
      price: 399,
      language: 'Chinese',
      duration: '30 hours',
      location: 'Shanghai',
      isNew: true,
      imageUrl: `https://picsum.photos/seed/${
        new Date().getTime() + 3
      }/300/200`,
    },
  ];

  return (
    <div className="App">
      <h1>Course List</h1>
      <CourseCardList courses={courses} />
    </div>
  );
}

export default App;
