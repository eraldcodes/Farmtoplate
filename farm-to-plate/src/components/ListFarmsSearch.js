import React, { useEffect, useState } from "react";
import FarmService from "./FarmService";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from "react-bootstrap/esm/Table.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import CDF from '../img/CountDown Farm.jpg';
import { NewItem } from "./Fake";
function ListFarmsSearch(props) {
  const [search, setSearch] = useState("");
  const [farms, setFarms] = useState([]);

  useEffect(() => {
    FarmService.getFarms().then((res) => {
      setFarms(res.data);
    });
  }, []);

  function viewFarm(id) {
    props.history.push(`/view-farm/${id}`);
  }

 

  return (
    <div className="search">
      <Container className="Searchit">
        <h1 className="text-center mt-4">Search The Farm/Shop!</h1>

        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search the farm!"
            />
          </InputGroup>
        </Form>


        <br></br>

        <table className="table table-striped table-bordered">
        
          <tbody>
         
            {farms
              .filter((farm) => {
                return search.toLowerCase() === ""
                  ? farm
                  :  farm.name
                  
                      .toLowerCase()
                      .includes(search);
              })
              
              .map((farm) => (
                <tr key={farm.id}>
                  <td> <img src={farm.file}/></td>
                    <td> {farm.name} <hr/>
                   {farm.description}<hr/>
                  {farm.farmLocation}</td>
                 
                  <td>
                   
                    <button
                      style={{ marginLeft: "10px" }}
                      onClick={() => viewFarm(farm.id)}
                      className="btn btn-info"
                    >
                      {NewItem.map((item) => (
                     <tr key={item.id}>
                     {item.farm_image}</tr>))}
                    </button>
                  </td>
                </tr>
              ))}
             
          </tbody>
        </table>
      </Container>
    </div>
  );
}

export default ListFarmsSearch;
