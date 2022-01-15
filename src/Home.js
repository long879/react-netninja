import { useState } from "react";

const Home = () => {
  // let name = "mario";
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    // name = "Yos";
    // console.log(name);
    // change name but no re-render component
    setName("lugi");
    setAge(30);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        Name: {name} - Age: {age}
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
