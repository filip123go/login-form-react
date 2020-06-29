import React from "react";
import Appointment from "../pages/Appointment";

class AppointmentContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            startDateSetFlag: false,
            endDateSetFlag: false
        };

        this.submitStartDate = this.submitStartDate.bind(this);
        this.submitEndDate = this.submitEndDate.bind(this);
    }


    submitStartDate() {
        this.setState({
            startDateSet: true
        });
    }

    submitEndDate() {
        this.setState({
            endDateSet: true
        });
    }

    render() {
        if (this.state.startDateSet) {
            return (
                <>
                    <div>
                        Set end Date and Time:
                        <Appointment/>
                    </div>
                </>
            );
        }
        return (
            <div>
                Set start Date and Time:
                <Appointment/>
            </div>
        );
    }
}

export default AppointmentContainer;