import React from 'react';
import { useSelector } from 'react-redux';

function BaseInfo() {
  const a = useSelector((state: any) => state.resumeModel);
  return (
    <div>
      <div>123123</div>
    </div>
  );
}

export default BaseInfo;
