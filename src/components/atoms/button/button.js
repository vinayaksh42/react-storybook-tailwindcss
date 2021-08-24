import React from 'react';
import SvgDocumentReport from '../../../assets/Vector.svg';
import SvgVector from '../../../assets/Vector1.svg';
import './button.css';

function button(props) {
  const sizeMap = {
    small: {
      width: '105px',
      height: '40px',
    },
    medium: {
      width: '170px',
      height: '40px',
    },
    large: {
      width: '280px',
      height: '44px',
    },
  };

  const backgroundColor = {
    primary: '#2F61BF',
    secondary: '#A1A1AA',
    success: '#D4D4D8',
  };

  const btnStyle = {
    backgroundColor: backgroundColor[props.backgroundColor],
    width: sizeMap[props.size].width,
    height: sizeMap[props.size].height,
  };

  return (
    <div style={btnStyle} className={`${props.className} btn`}>
      <span className="btn-text">
        {
              props.icon
              // eslint-disable-next-line no-nested-ternary
              && <img className="btn-logo" src={props.icon === 'document' ? SvgDocumentReport : props.icon === 'vector' ? SvgVector : ''} alt="logo" />
        }
        {props.text}
      </span>
    </div>
  );
}

export default button;
