import React from "react";
import UserContext from "../context/UserContext""

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      count2: 0,
    };
  }

  render() {
    const { name, email, location } = this.props;

    return (
      <div className="user-card">
        <UserContext.Consumer>
          {
            ({userInfo}) => (
              <h1 className="font-bold">Context Data: {userInfo}</h1>
            )
          }
        </UserContext.Consumer>

        <h3>{name}</h3>
        <p>{email}</p>
        <p>{location}</p>
      </div>
    );
  }
}

export default UserClass;