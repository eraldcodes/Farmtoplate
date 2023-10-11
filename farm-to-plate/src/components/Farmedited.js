import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./Post.css";
import { id } from "./Farmdetails";

const FarmEdited = () => {
  const [msg, setMsg] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formData, setFormData] = useState({
    fid: "",
    name: "",
    email: "",
    farm_location: "",
    establish_date: "",
    description: "",
    opening_hour: "",
    produces: "",
    farm_feature: "",
    open_days: "",
  });

  // updating all the changed data to the database
  const handleUpdate = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:8000/api/update/${id}`, formData)
      .then((response) => {
        setMsg("Updated Successfully");
      })
      .catch((error) => {
        if (error.response.status === 404) {
          setMsg("Record not found");
        } else {
          setMsg("Update failed");
        }
      });
  };

  // making changes into text field
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    //validation of the email
    if (name === "email") {
      const emailRegex = /^\S+@\S+\.\S+$/;
      setEmailError(
        emailRegex.test(value) ? "" : "Please enter a valid email address."
      );
    }
  };
  //displaying the data from the database based on the id
  useEffect(() => {
    axios.get(`http://localhost:8000/api/show/${id}`).then((res) => {
      setFormData({
        name: res.data.name,
        email: res.data.email,
        farm_location: res.data.farm_location,
        establish_date: res.data.establish_date,
        description: res.data.description,
        opening_hour: res.data.opening_hour,
      });
    });
  }, []);

  return (
    //displaying all the elements of the component
    <div>
      <Navbar1 />
      <br />
      <br />
      <br />
      <br />

      <div class="profile my-4">
        <h1 style={{ textAlign: "center", color: " black" }}>
          Edit farm details
        </h1>
        <br />

        <div className="card-body">
          <div className="container">
            <Form>
              <Form.Group className="mb-3"></Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <h5>Farm Name</h5>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Farm Name..."
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ marginRight: "20px" }}>
                  <h5>Farm email</h5>
                </Form.Label>

                <Form.Label>
                  <p>{emailError}</p>
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="email..."
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <h5>Farm Location</h5>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="farm_location..."
                  id="farm_location"
                  name="farm_location"
                  value={formData.farm_location}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <h5>Farm description</h5>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description..."
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <h5>Farm opening hour</h5>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Opening hour..."
                  id="opening_hour"
                  name="opening_hour"
                  value={formData.opening_hour}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  <h5>Farm Established Date</h5>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Established date..."
                  id="establish_date"
                  name="establish_date"
                  value={formData.establish_date}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handleUpdate}>
                Update
              </Button>
              <p>{msg}</p>
              <br />
            </Form>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default FarmEdited;
