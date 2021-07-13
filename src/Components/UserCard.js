import React from "react";
import { Card } from "react-bootstrap";

const UserCard = ({ user }) => {
  console.log();
  return (
    <div>
      <Card style={{ width: "18rem", margin: 20 }}>
        <Card.Img
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/768px-User_icon_2.svg.png"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            <span>Email : {user.email}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
