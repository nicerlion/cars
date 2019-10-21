import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import './styles.scss';

const DEFAULT_IMAGE = 'https://rzpict1.blob.core.windows.net/images/custojusto.pt/RZCCSTPT29139606/FIAT-BARCHETTA-00.jpg';

const CarsToCompare = ({ carsToCompare }) => {
  const [ visible, setVisible ] = useState(false);
  const [ firstCarToCompare={}, secondCarToCompare={} ] = carsToCompare;

  useEffect(() => {
    setVisible(!!firstCarToCompare.id || !!secondCarToCompare.id);
  }, [ firstCarToCompare.id, secondCarToCompare.id ]);

  return visible && <div className="comparison-box container">
    <div>
      {
        !!firstCarToCompare.id && <React.Fragment>
          <img src={firstCarToCompare.image || DEFAULT_IMAGE} alt={ firstCarToCompare.model }/>
          <div className="item-data">
            <h5>
              { firstCarToCompare.model }
            </h5>
            <span>
              { firstCarToCompare.year }
            </span>
            <span>
              { firstCarToCompare.brand }
            </span>
            <span className="price">
              ${ firstCarToCompare.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }
            </span>
          </div>
        </React.Fragment>
      }
    </div>
    <div>
      {
        !!secondCarToCompare.id && <React.Fragment>
          <img src={secondCarToCompare.image || DEFAULT_IMAGE} alt={ secondCarToCompare.model }/>
          <div className="item-data">
            <h5>
              { secondCarToCompare.model }
            </h5>
            <span>
              { secondCarToCompare.year }
            </span>
            <span>
              { secondCarToCompare.brand }
            </span>
            <span className="price">
              ${ secondCarToCompare.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }
            </span>
          </div>
        </React.Fragment>
      }
    </div>
    <div className="x-btn-comp">
      <button onClick={() => setVisible(false)}>X</button>
    </div>
  </div>
};

const mapStateToProps = ({ cars }) => ({
  carsToCompare: cars.carsToCompare,
});

export default connect(mapStateToProps)(CarsToCompare);
