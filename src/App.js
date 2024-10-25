import logo from "./logo.svg";
import "./App.css";
import { Button, Card, CardBody, Form, FormGroup, Input, Label } from "reactstrap";
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  function sendToWeb() {

    console.log("user...", name)
    let webUrl = "https://fcinvest.faircent.com?token=34535434534tgdgfdfgdfgdfd"
    window.open(webUrl, '_blank')
  }
  return (
    <div className="AppMain">
      <div className="App">
        <Card
          className="my-2"
          style={{
            width: "18rem",
            margin: 'auto'
          }}
        >
          <CardBody className="cardBody">
            <Form>
              <FormGroup>
                <Label for="exampleEmail" className="label1">Enter Your Digit</Label>
                <Input
                  id="exampleNumber"
                  name="numbrs"
                  placeholder="Enter your digits"
                  type="text"
                  onChange={e => setName(e.target.value)}
                />
              </FormGroup>

            </Form>
            {/* <a href="https://fcinvest.faircent.com?token=34535434534tgdgfdfgdfgdfd" target="_blank" rel="noreferrer"> */}
            <Button onClick={sendToWeb}>Submit</Button>
            {/* </a> */}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default App;
