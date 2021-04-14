import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  let history = useHistory(); // useHistory to
  const getJobs = async () => {
    let url = `https://my-json-server.typicode.com/HoNguyenTrieu/itviec_json/jobs`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    getJobs();
  }, []);

  const handleClick = () => {
    history.push("/jobs");
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>6 IT jobs in Vietnam for you</h1>
      {/* <Button onClick={handleClick}>Go to login</Button> */}
      {/* <Link to="/login">go to login page! </Link> */}
      <Button onClick={handleClick}>Go to Jobs List</Button>
    </div>
  );
};

export default Homepage;
