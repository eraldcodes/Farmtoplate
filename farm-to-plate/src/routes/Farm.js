import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from "react-router-dom";

class Farms extends Component 
  {
    state = {
        farms : [],
        loading : true,

    }


async componentDidMount(){
const res = await axios.get('http://localhost:8000/api/myfarm');
if(res.data.status===200)
{
    this.setState({
        farms:res.data.farms,
        loading: false
    });
}
}




    render(){
    var id = 1001;

        var farm_HTMLTABLE = "";
        if (this.state.loading)
        {
            farm_HTMLTABLE = <tr><td colSpan="7"><h2>Loading...</h2></td></tr>
        
        }
        else 
        {
            farm_HTMLTABLE = 
            this.state.farms.map( (item) => {
                if(item.id===id){
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.farmLocation}</td>
                            <td>{item.mobileNumber}</td>
                            <td>{item.farmDescription}</td>
                            <td>{item.farmProduces}</td>
                            <td>{item.farmFeatures}</td>
                            <td>
                                <Link to= {`editfarm/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                            </td>
                            <td>
                                <button type="button" className="btn btn-success btn-sm">delete</button>
                            </td>
                        </tr>
                    );
                }
                }
                );
        
        }



      return (
        <div class="profile my-5">
        <div class="container">
            <div class="card mb-4">
                <div class="card-header ">
                    <h3>Edit farm details</h3>
                </div>
                <div class="card-body">
                <table className="table table-bordered table striped">
    <thead>
        <tr>
            <th>Farm name</th>
            <th>Farm location</th>
            <th>Mobile number</th>
            <th>Farm description</th>
            <th>Farm produces</th>
            <th>farm features</th>
            <th>edit</th>
            <th>delete</th>
        </tr>
    </thead>
    <tbody>
    {farm_HTMLTABLE}
    </tbody>
</table>
                </div>
            </div>
            
        </div>
    </div>
      );
    }
    
    
  }

  export default Farms




  

