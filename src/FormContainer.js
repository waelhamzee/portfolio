import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Form,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";
import NavBar from "./NavBar";

const SERVICE_ID = "service_49agpzg";
const TEMPLATE_ID = "template_5898iz4";
const PUBLIC_ID = "9zU9GYwom9FSWzwLN";

const FormContainer = () => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submitEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return alert("Provide all inputs.");
    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        document.getElementById("form"),
        PUBLIC_ID
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setMessage("");
            setName("");
            setEmail("");
            alert("Your email was sent successfully.");
          }
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  const emptyInputs = () => {
    setMessage("");
    setName("");
    setEmail("");
  };

  return (
    <Card style={{ width: "100%", height: "100h", border: "none" }}>
      <CardBody style={{ padding: "0" }}>
        <NavBar style={{ padding: "2rem" }} contact emptyInputs={emptyInputs} />
        <Card style={{ border: "none" }}>
          <CardTitle className="image-title">
            <img
              src="https://mattfarley.ca/img/mf-avatar.svg"
              alt="Wael"
              className="contact-logo"
              onClick={() => window.location.href="/"}
            />
          </CardTitle>
          <CardTitle tag={"h1"} className="email-title">
            Thanks for taking the time to reach out. How can I help you today?
          </CardTitle>
          <CardBody style={{ display: "flex", justifyContent: "center" }}>
            <Form
              id="form"
              onSubmit={submitEmail}
              style={{ maxWidth: "40rem", width: "100%" }}
            >
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleName">Name</Label>
                    <Input
                      id="exampleName"
                      name="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleMessage">Message</Label>
                <Input
                  id="exampleMessage"
                  name="message"
                  type="textarea"
                  style={{ height: "10rem" }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FormGroup>
              <button
                style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
                className="violet-btn"
              >
                Submit
              </button>
            </Form>
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  );
};

export default FormContainer;
