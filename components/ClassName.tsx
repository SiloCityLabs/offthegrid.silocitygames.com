import React from "react";
import SclPlaceholder from "@/components/_silabs/SclPlaceholder";

const ClassName = ({ isGenerating, value }) => {
  return (
    <>
      <h3 className="text-center">&ldquo;<SclPlaceholder isLoading={isGenerating} value={value} />&rdquo;</h3>
      <hr />
    </>
  );
}

export default ClassName;
