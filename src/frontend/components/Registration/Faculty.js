import React, { useState } from 'react';

const Faculty = () => {
  const [faculty, setFaculty] = useState({
    fullName: '',
    branch: '',
    password: '',
    confirmPassword: '',
  });

  return <div>Faculty</div>;
};

export default Faculty;