import  { useMemo, useState} from 'react';
import React from 'react';
import PropTypes from "prop-types";
import {Icon} from "react-icons-kit";
import {star} from 'react-icons-kit/fa/star'
/**
 * 
 * @param {number} count  No. of  icons needed
 * @param {number} rating returns the value selected
 *  @param {color} filled  color in which the selected icons should be displayed
 *  @param {color} unfilled color in which the unselected icons should be displayed
 *  @param {number} onRating stores the change in icon value
 *  @param {number} size  size of the icon 
 *  @param {react-icon} icon  icon from react-icons-kit 
 * @returns rating component
 */

const Rate = ({ count, rating, filled, unfilled, onRating,size,icon }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return filled;
    } else if (!hoverRating && rating >= index) {
      return filled;
    }
    return unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <Icon
          key={idx}
          className="cursor-pointer"
          size={size}
          icon={icon}
          onClick={() => onRating(idx)}
          style={{ color: getColor(idx) }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  return <div>{starRating}</div>;
};

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
  filled: PropTypes.string,
  unfilled: PropTypes.string,
  size:PropTypes.number,
  icon:PropTypes.element,
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
  filled: "#f5eb3b",
  unfilled: "#DCDCDC",
  icon:star,
  size:20,
};

export default Rate;