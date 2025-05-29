// --- React ---
import React from 'react';
// --- Helpers ---
import { SclPlaceholder } from '@silocitypages/ui-core';

const ClassName = ({ isGenerating, value }) => {
  return (
    <>
      <h3 className='text-center'>
        &ldquo;
        <SclPlaceholder isLoading={isGenerating} value={value} />
        &rdquo;
      </h3>
      <hr />
    </>
  );
};

export default ClassName;
