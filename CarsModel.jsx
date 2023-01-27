import React from "react";

function CarsModel(props) {
  const aCar = props.car;

  const mapCar = (aCar) => {
    console.log("mapping", aCar);

    return (
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{aCar.make}</h5>
            <p className="card-text">
              Some quick example text to build on the card...
            </p>
          </div>
        </div>
      </div>
    );
  };

  return aCar.map(mapCar);
}

export default CarsModel;
