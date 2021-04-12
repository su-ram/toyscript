import React, { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";

import "../contents.css"
import Summary from "./Summary";
import Place from "./Place";
import Time from "./Time";

function ControlledTabs() {
  const [key, setKey] = useState('home');


  return (
    <Container>
      <Tabs
        className="Tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab id="summary" eventKey="summary" title="Summary">
          <Container style={{backgroundColor:"rgb(246, 238, 204)"}}>
            <Summary />
          </Container>
        </Tab>
        <Tab id="character" eventKey="character" title="Character">
          <Container>
            <p style={{backgroundColor:"rgb(246, 238, 204)"}}>
              character page
            </p>
          </Container>
        </Tab>
        <Tab id="place" eventKey="place" title="Place">
          <Place />
        </Tab>
        <Tab id="time" eventKey="time" title="Time">
          <Time />
        </Tab>
      </Tabs>
    </Container>
    
  );
}

export default ControlledTabs;