import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Geocode from "react-geocode";
import axios from "axios";
import googleMapsIcon from "../img/farm/google_maps_icon.png";
const API_KEY = "AIzaSyAST6YPLanuos8XNHWZFa-2uQk3RQUY0k4";

function App() {
  const [center, setCenter] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  useEffect(() => {
    Geocode.setApiKey(API_KEY);
    Geocode.setLanguage("en");
    Geocode.setRegion("us");
    //getting the data of all the farms from php laravel (2020270 folder)
    axios
      .get("http://localhost:8000/api/farm_information")
      .then((res) => {
        if (res.data.status === 200) {
          const locations = res.data.farm_information.map((farm) => {
            return {
              id: farm.id,
              address: farm.farm_location,
              name: farm.farm_name,
            };
          });
          setAddresses(locations);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  //converting the full address from the database to cordinates (lat, lng) using react-geocode library
  useEffect(() => {
    if (addresses.length > 0) {
      Geocode.fromAddress(addresses[0].address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          setCenter({ lat, lng });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [addresses]);

  if (!center) {
    return <div>Loading...</div>;
  }
  // using google maps api config it and to display all the addresses of all the farms from the database.
  // the google icon is changed and this icon is linked with the url that when its clicked it goes to the
  // clicked farm  (/shoppage/${address.id}`)
  return (
    <div className="App">
      <LoadScript googleMapsApiKey={API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={{
            zoomControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            streetViewControl: false,
            rotateControl: false,
            scaleControl: false,
          }}
        >
          {addresses.map((address, index) => {
            return (
              <Marker
                key={index}
                position={null}
                label={address.name}
                onClick={() => window.open(`/shoppage/${address.id}`, "_blank")}
                onLoad={(marker) => {
                  Geocode.fromAddress(address.address).then(
                    (response) => {
                      const {
                        lat,
                        lng,
                      } = response.results[0].geometry.location;
                      marker.setPosition({ lat, lng });
                      marker.setIcon(googleMapsIcon); // setting the custom icon
                    },
                    (error) => {
                      console.error(error);
                    }
                  );
                }}
              />
            );
          })}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default App;
