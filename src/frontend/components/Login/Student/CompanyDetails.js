import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const CompanyDetails = () => {
  const location = useLocation();
  const data = location.state?.data;
  console.log(data.post);
  return (
    <div>
      <div>details here </div>
    </div>
  );
};

export default CompanyDetails;
