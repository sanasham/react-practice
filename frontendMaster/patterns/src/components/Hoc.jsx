import React from "react";

const Hoc = (Component) => {
  return function EnhancedComponent(props) {
    console.log("props", { ...props });
    return (
      <div>
        <Component {...props} />
      </div>
    );
  };
};

export default Hoc;
