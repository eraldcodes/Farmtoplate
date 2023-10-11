import React, { Component } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

class Farms extends Component {
  state = {
    farms: [],
    loading: true,
  };

  //getting data from php (2020270 folder)
  async componentDidMount() {
    const res = await axios.get("http://localhost:8000/api/farm_information");
    if (res.data.status === 200) {
      this.setState({
        farm_information: res.data.farm_information,
        loading: false,
      });
    }
  }

  render() {
    const id = 1;
    var farm_HTMLTABLE = "";
    if (this.state.loading) {
      farm_HTMLTABLE = (
        <tr>
          <td colSpan="7">
            <h2>Loading...</h2>
          </td>
        </tr>
      );
    } else {
      // mapping all the data pulled from the database
      farm_HTMLTABLE = this.state.farm_information.map((item) => {
        if (item.id === id) {
          return (
            <tr key={item.id}>
              <td>
                {" "}
                <img
                  src={`farm/${item.id}.jpg`}
                  style={{ width: "300px", height: "auto" }}
                />
              </td>

              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.farm_location}</td>
              <td>{item.establish_date}</td>
              <td>
                <Link to={`/farmedited`} className="btn btn-success btn-sm">
                  edit
                </Link>
              </td>
            </tr>
          );
        }
      });
    }

    return (
      <div class="profile my-5">
        <div class="container">
          <div class="card mb-4">
            <div class="card-header ">
              <h3>Your Farm</h3>
            </div>
            <div class="card-body">
              <table className="table table-bordered table striped">
                <thead>
                  <tr>
                    <th>Farm description</th>

                    <th>Farm name</th>
                    <th>Farm email</th>
                    <th>Farm location</th>
                    <th>Farm establish_date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{farm_HTMLTABLE}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Farms;
//exporting id to farmedited component
export const id = 1;
