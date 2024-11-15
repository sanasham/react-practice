import React from "react";

function Test() {
  function handleClick() {
    alert("i am clicked");
  }
  function handleMouseOver() {
    alert("i am mouse over");
  }
  function hangleChange(e) {
    console.log("Value till now ", e.target.value);
  }
  return (
    <>
      <div>
        <p onMouseOver={handleMouseOver}>i am a para</p>
        <button onClick={handleClick}>click me</button>
      </div>

      <form action="">
        <input type="text" onChange={hangleChange} />
      </form>
    </>
  );
}

export default Test;
