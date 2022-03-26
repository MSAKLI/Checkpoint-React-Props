import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Profile = (props) => {
  console.log(props);
  const handleName = () => alert(`Name : ${props.name}`);
  return (
    <Card style={{ width: "18rem" }}>
      {props.children}
      <Card.Body>
        <Card.Title>Tap Name !</Card.Title>
        <Card.Title>{props.job}</Card.Title>
        <Card.Title>{props.biography}</Card.Title>
        <Button variant="primary" onClick={handleName}>
          Name
        </Button>
      </Card.Body>
    </Card>
  );
};

Profile.defaultProps = {
  name: "Marwen",
};

Profile.propTypes = {
  name: PropTypes.string,
  profession: PropTypes.string,
};

export default Profile;
