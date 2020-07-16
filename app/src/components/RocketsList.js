import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRockets } from "../store/actions";

const RocketsList = (props) => {
  useEffect(() => {
    // call the action creator
    props.fetchRockets();
  }, []);
  return (
    <div>
      {props.isLoading && <h4>Loading Rockets Data...</h4>}
      {props.error && <p className="error">{props.error}</p>}
      {props.rockets.length > 0 && (
        <div className="rockets">
          {props.rockets.map((rocket) => (
            <div className="card" key={rocket.id}>
              <h2>{rocket.rocket_name}</h2>
              <img className="rocketImg" src={rocket.flickr_images[1]} />
              <p id="description">{rocket.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    rockets: state.rockets,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchRockets })(RocketsList);
