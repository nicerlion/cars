import { connect } from 'react-redux';
import React, { useState } from 'react';
import { selectCarToCompare } from './../../Actions/cars';
import './styles.scss';

const DEFAULT_IMAGE = 'https://rzpict1.blob.core.windows.net/images/custojusto.pt/RZCCSTPT29139606/FIAT-BARCHETTA-00.jpg';

/**
 * Component to render the detail of car inside a Grid or List
 * 
 * @param {Object} param0 The component object props
 */
const CartItem = ({
  year,
  model,
  brand,
  image,
  price,
  description,
  selectCarToCompare,
}) => {
  const [ expanded, setExpanded ] = useState(false);

  return <div className="item">
    <div>
      <img src={!!image ? image : DEFAULT_IMAGE} alt={ model }/>
    </div>
    <div className="item-data">
      <h5>
        { model }
      </h5>
      <span>
        { year }
      </span>
      <span>
        { brand }
      </span>
      <span className="price">
        ${ price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }
      </span>
      <button onClick={() => setExpanded(!expanded)} className="learn-more">
        { expanded ? 'Close' : 'Learn More' }
      </button>
      <button onClick={selectCarToCompare} className="compare">
        Compare
      </button>
      {
        expanded && <div className="lm">
          <button onClick={() => setExpanded(!expanded)} className="x-btn">X</button>
          <div className="big-image">
            <img src={!!image ? image : DEFAULT_IMAGE} alt={ model }/>
          </div>
          <div className="item-description">
            <p>{ description }</p>
          </div>
        </div>
      }
      {
        expanded && <div className="overlay"></div>
      }
    </div>
  </div>
};

const mapDispatchToProps = (dispatch, { ...carObject }) => ({
  selectCarToCompare: () => {
    return dispatch(selectCarToCompare(carObject));
  }
});

export default connect(null, mapDispatchToProps)(CartItem);