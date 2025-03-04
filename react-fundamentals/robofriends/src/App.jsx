import { useState, useEffect } from "react";
import CardList from "./CardList.jsx";
import SearchBox from "./SearchBox.jsx";
import { robots } from "./robots.jsx";
import "./App.css";

const App = () => {
  const [robotsList, setRobotsList] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    setRobotsList(robots);
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
    //setRobotsList(robots);

    //setRobotsList(filteredRobots);
    //console.log(event.target.value);
  };

  const filteredRobots = robotsList.filter((robots) => {
    return robots.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <>
      <h1 className="f2">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </>
  );
};

export default App;
