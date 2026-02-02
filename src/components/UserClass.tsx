import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 1,
            count2: 0
        }
    }

    render() {
        const {name, email, location} = this.props;
        const {count} = this.state;

        return(
            <div className="user-card ">
                <h3>{name}</h3>
                <p>{email}</p>
                <p>{location}</p>
            </div>
        )
    }
}