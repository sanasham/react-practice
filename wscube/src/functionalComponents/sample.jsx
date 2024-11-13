function Sample() {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  const listItems = products.map((item) => <li key={item.id}>{item.title}</li>);
  const handleSubmit = () => {
    console.log("handle Submit clicked");
  };

  return (
    <div>
      <h1>All items</h1>
      <ul>{listItems}</ul>
      <br />
      <button onClick={handleSubmit}>click me</button>
    </div>
  );
}

export default Sample;
