import React from "react";
import PropTypes from "prop-types";



const Card = (props) =>{
    return(
        <span className="bg-dark text-white m-4">{props.number}</span>
 
    )
}

Card.propTypes={
    number: PropTypes.string
}



export default Card;