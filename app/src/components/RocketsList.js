import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchRockets } from "../store/actions";

const RocketsList = (props) => {
  console.log(props, "from RocketsList");
  useEffect(() => {
    // call the action creator
    props.fetchRockets();
  }, []);
  return (
    <div>
      {props.isLoading && <h4>Loading Rockets Data...</h4>}
      {props.error && <p className="error">{props.error}</p>}
      {props.rockets.length > 0 && (
        <div>
          {props.rockets.map((rocket) => (
            <div className="rockets" key={rocket.id}>
              <h3>{rocket.rocket_name}</h3>
              <img src={rocket.flickr_images[1]} />
              <p>{rocket.description}</p>
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
