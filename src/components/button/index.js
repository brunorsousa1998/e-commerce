import "./style.css";

const Button = ({ text, onClick = () => {} }) => (
    <button className="button" onClick={onClick}>
        {text}
    </button>
);

export default Button;
