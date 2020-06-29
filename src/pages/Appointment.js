import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import setHours from 'date-fns/setHours'
import setMinutes from 'date-fns/setMinutes'

class Appointment extends React.Component {
    state = {
        startDate: new Date(),
        endDate: new Date()
    };

    handleChange = date => {
        console.log('I am inside handle change')
        this.setState({
            startDate: date
        });
        console.log('I am inside handle change')
        console.log(this.state.startDate);
        this.doSentDate();

    };

    async doSentDate() {
        if (!this.state.startDate) {
            console.log(this.state.startDate)
            console.log('date empty')
            return;
        }
        try {
            let res = await fetch('http://localhost:8081/startdate', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date: this.state.startDate
                })
            });

            let result = await res.json();
            if (result && result.success) {
                console.log('here goes the response')

            } else if (result && result.success === false) {
                this.resetForm();
                alert(result.msg);
            }
            console.log(result.jwt);

        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <DatePicker
                selected={this.state.startDate}
                onChange={date => this.handleChange(date)}
                showTimeSelect
                includeTimes={[
                    setHours(setMinutes(new Date(), 0), 18)
                ]}
                dateFormat="MMMM d, yyyy h:mm aa"
            />
        );
    }
}

export default Appointment;