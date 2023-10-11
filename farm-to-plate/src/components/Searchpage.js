import { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/esm/Table.js";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link } from "react-router-dom";
import "../components/search.css";

export default function ShopSearchPage() {
  const [search, setSearch] = useState("");
  const [farmInformation, setFarmInformation] = useState([]);
  //getting the data from database table using axios and setting it inside farminformation
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/farm_information")
      .then((res) => {
        if (res.data.status === 200) {
          setFarmInformation(res.data.farm_information);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="search">
      <Container className="SearchIt">
        <h1 className="text-center mt-4">Search your Farm!</h1>

        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by farm name"
            />
          </InputGroup>
        </Form>

        <Table striped bordered hover>
          <tbody>
            {farmInformation
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.description.toLowerCase().includes(search);
              })

              //maping all the data based on the search
              .map((item) => (
                <tr key={item.id}>
                  <td>
                    <Link to={`/shoppg/${item.id}`}>
                      <div style={{ backgroundColor: "black", padding: "2px" }}>
                        <img
                          src={`/farm/${item.id}.jpg`}
                          style={{ width: "300px", height: "auto" }}
                        />
                      </div>
                    </Link>
                  </td>
                  <td>
                    {" "}
                    <Link
                      to={`/shoppage/${item.id}`}
                      style={{ position: "relative", zIndex: 2 }}
                    >
                      <h2 style={{ color: "black" }} className="no-underline">
                        <span style={{ textDecoration: "none !important" }}>
                          {item.name}
                        </span>
                      </h2>
                    </Link>
                    <hr />
                    <Form.Label>
                      <h5>Address: </h5>{" "}
                    </Form.Label>
                    <br />
                    {item.farm_location}
                    <hr />
                    <Form.Label>
                      <h5>Description: </h5>{" "}
                    </Form.Label>
                    <br />
                    {item.description}
                  </td>

                  <td>
                    <iframe
                      width="300"
                      height="300"
                      frameborder="0"
                      style={{ border: 0 }}
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAST6YPLanuos8XNHWZFa-2uQk3RQUY0k4&q=${item.farm_location}`}
                      allowfullscreen
                    ></iframe>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
