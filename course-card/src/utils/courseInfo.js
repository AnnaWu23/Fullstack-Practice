let courses = [
  {
    id: 1,
    title: 'React',
    price: 100,
    language: 'English',
    duration: '10 hours',
    location: 'New York',
    isNew: true,
    // Current time as seed for random image
    imageUrl: `https://picsum.photos/seed/${new Date().getTime()}/300/200`,
    difficulty: 'Beginner',
  },
  {
    id: 2,
    title: 'React Native',
    price: 200,
    language: 'Chinese',
    duration: '10 hours',
    location: 'New York',
    isNew: false,
    imageUrl: `https://picsum.photos/seed/${new Date().getTime() + 1}/300/200`,
    difficulty: 'Advanced',
  },
  {
    id: 3,
    title: 'Frontend Development',
    price: 299,
    language: 'Chinese',
    duration: '20 hours',
    location: 'Beijing',
    isNew: true,
    imageUrl: `https://picsum.photos/seed/${new Date().getTime() + 2}/300/200`,
    difficulty: 'Intermediate',
  },
  {
    id: 4,
    title: 'Full Stack Development',
    price: 399,
    language: 'Chinese',
    duration: '30 hours',
    location: 'Shanghai',
    isNew: true,
    imageUrl: `https://picsum.photos/seed/${new Date().getTime() + 3}/300/200`,
    difficulty: 'Advanced',
  },
];

// simulate GET request
export const fetchCoursesInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...courses]);
    }, 2000);
  });
};
