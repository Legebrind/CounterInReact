import React from "react";
import PropTypes from "prop-types";



const Card = ({number}) =>{
    return(
        <span className="bg-dark text-white m-4">{number}</span>
 
    )
}

Card.propTypes={
    number: PropTypes.string
}

Card.defaultProps={
    number:"0"
}

export default Card;