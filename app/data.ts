const courses = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      description: "Learn the fundamental concepts of computer science",
      slug: "introduction-to-computer-science",
      lectures: 5,
      duration: 90,
      rating: 4.5,
      price: 500,
      currency: "$",
      thumbnail: "https://via.placeholder.com/150",
      video: "https://via.placeholder.com/150",
      instructor: 1,
    },
    {
      id: 2,
      title: "Introduction to Programming",
      description: "Learn the fundamental concepts of programming",
      slug: "introduction-to-programming",
      lectures: 6,
      duration: 120,
      rating: 4.0,
      price: 600,
      currency: "$",
      thumbnail: "https://via.placeholder.com/150",
      video: "https://via.placeholder.com/150",
      instructor: 2,
    },
    {
      id: 3,
      title: "Data Structures",
      description: "Learn the fundamental concepts of data structures",
      slug: "data-structures",
      lectures: 3,
      duration: 30,
      rating: 3.5,
      price: 300,
      currency: "$",
      thumbnail: "https://via.placeholder.com/150",
      video: "https://via.placeholder.com/150",
      instructor: 1,
    },
  ];
  
  const instructor = [
    {
      id: 1,
      name: "John Doe",
      slug: "john-doe",
      image: "https://via.placeholder.com/150",
      designation: "PhD in CSE from MIT",
    },
    {
      id: 2,
      name: "Jane Doe",
      slug: "jane-doe",
      image: "https://via.placeholder.com/150",
      designation: "Masters in CSE from Cambridge",
    },
  ];
  
  const user = [
    {
      id: 1,
      name: "Salman Khan",
      slug: "salman-khan",
      image: "https://via.placeholder.com/150",
    },
  ];
  
  const userCourses = [
    {
      userId: 1,
      courseId: 1,
    },
  ];
  
  export { courses, instructor, user, userCourses };