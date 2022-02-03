import * as React from "react";
import "./styles.css";

const SkeletonParagraph = (props) => {
  const getWidth = (index) => {
    const { width, rows = 2 } = props;
    if (Array.isArray(width)) {
      return width[index];
    }
    // last paragraph
    if (rows - 1 === index) {
      return width;
    }
    return undefined;
  };
  const { children, loading, rows } = props;
  const rowList = [...Array(rows)].map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <li key={index} style={{ width: getWidth(index) }} />
  ));

  if (!loading) {
    return <div>{children}</div>;
  }
  return (
    <>
      <span className="skeleton-title"></span>
      <ul className="skeleton-paragraph">{rowList}</ul>
    </>
  );
};

export default SkeletonParagraph;
