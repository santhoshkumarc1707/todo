import React from "react";

const Tag = ({ tagname, selectTags, selected }) => {
  const tagstyle = {
    
      HTML: { backgroundColor: "#fda821" },
      CSS: { backgroundColor: "#15d4c8" },
      JAVASCRIPT: { backgroundColor: "#ffd12c" },
      REACT: { backgroundColor: "#4cdafc" },
      default: { backgroundColor: "#f9f9f9" },
    
    
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagstyle[tagname] : tagstyle.default}
      onClick={() => selectTags(tagname)}
    >
      {tagname}
    </button>
  );
};

export default Tag;
