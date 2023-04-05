import PropTypes from "prop-types";
const FrenchDate = ({ date }) => {
  const dateFormated = new Date(date).toLocaleDateString("fr", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return <span>{dateFormated}</span>;
};



FrenchDate.prototype = {
  date: PropTypes.string.isRequired,
};

export default FrenchDate;
