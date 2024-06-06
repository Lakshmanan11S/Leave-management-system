import axios from "axios";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";

const Forgotpassword = ({ show, setShow, user }) => {
  const handleClose = () => setShow(false);
  const forgotinitialstate = {
    userName: "",
    userPassword: "",
  };

  const [Formdata, setFormdata] = useState(forgotinitialstate);

  const inputhandler = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...Formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:40000/api/forgot",Formdata)
      toast.success(response.data.message, {position:'top-right'})
      setFormdata(forgotinitialstate)
      handleClose();
    }catch(err){
      toast.error("An error acquire",{
        position:'top-right'
      })
    } };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Forgot Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              name="userName"
              value={Formdata.userName}
              id="name"
              onChange={inputhandler}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="text"
              name="userPassword"
              id="userPassword"
              value={Formdata.userPassword}
              onChange={inputhandler}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Toaster/>
      </Modal.Body>
    </Modal>
  );
};

export default Forgotpassword;
