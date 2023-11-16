import PropTypes from "prop-types";

const Header = ({ text, bgColor, color}) => {

  const headerStyles = {
    backgroundColor: bgColor,
    textColor: color
}  

  return (
    <div style={headerStyles}>

        <div>{text}</div>
    </div>
  )

}

Header.defaultProps = {
    text: "Review App",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ffffff"
}

Header.propTypes = {
    text:PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header