//rafce
import { useLocation } from "react-router-dom"
import PropTypes from "prop-types" //needed to check the type with the props
import Button from "./Button"

const Header = ({ title, onAdd, showed }) => {
    //{title} is a destructure of prop.title
    const location = useLocation()

    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === '/' && (<Button color={showed ? "#c13525" : "#8B9D77"} text={showed ? "Close" : "Add"} onClick={onAdd} />)}
        </header>
    )
}

Header.defaultProps = {
    title: "Task Traker",
}

Header.propTypes = {
    title: PropTypes.string /*isRequired*/, //expects to have a string as a prop (attribute), makes the code more robust
}

export default Header
