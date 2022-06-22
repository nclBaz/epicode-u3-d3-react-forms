import { Component } from "react"
import { Form, Button } from "react-bootstrap"

/*
name --> string
phone --> string/number
numberOfPeople --> number
dateTime --> string (Date)
smoking --> boolean
specialRequests --> string
*/

class ReservationForm extends Component {
  state = {
    reservation: {
      name: "",
      phone: "",
      numberOfPeople: 1,
      dateTime: "",
      smoking: false,
      specialRequests: "",
    },
  }

  render() {
    return (
      <div>
        <h2>Book your table here!</h2>
        <Form>
          <Form.Group>
            <Form.Label>What's your name?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert your full name here!"
              value={this.state.reservation.name}
              onChange={event => {
                console.log(event.target.value)
                // this.setState() it's an overwriting process! But we would like to do it as a merging process by overwriting not the entire state but
                // just the property that we specify
                this.setState({ reservation: { name: event.target.value } })
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>What's your phone?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insert your phone here!"
              value={this.state.reservation.phone}
              onChange={() => {
                console.log("change")
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>How many people?</Form.Label>
            <Form.Control
              as="select"
              value={this.state.reservation.numberOfPeople}
              onChange={() => {
                console.log("change")
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>When are you coming?</Form.Label>
            <Form.Control
              type="datetime-local"
              value={this.state.reservation.dateTime}
              onChange={() => {
                console.log("change")
              }}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            {/* Since the "value" property in checkboxes is NOT true/false, in order to get a boolean value from it, we need to read another property called checked */}
            <Form.Check
              type="checkbox"
              label="Do you smoke?"
              checked={this.state.reservation.smoking}
              onChange={() => {
                console.log("change")
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Any special requests?</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={this.state.reservation.specialRequests}
              onChange={() => {
                console.log("change")
              }}
            ></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default ReservationForm
