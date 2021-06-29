import React from "react";

const Styles = () => {
  return (
    <style>
      {`
    .title {
      color: var(--aha-green-800);
      font-size: 20px;
      text-align: center;
      margin: 20px;
    }
    `}
    </style>
  );
};

aha.on("docsReport", ({ fields, onUnmounted }, { identifier, settings }) => {
  window.location = "https://big.aha.io/develop/bookmarks/custom_pivots/6979234807875222688/6979235092670901365";

  return (
    <>
      <Styles />
      <div className='title'>Redirecting...</div>
    </>
  );
});