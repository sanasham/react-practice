import React from 'react';

function SignUpForm() {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <label htmlFor="name">Name:</label>
      <input
        className="border"
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
      />
    </div>
  );
}

export default SignUpForm;
