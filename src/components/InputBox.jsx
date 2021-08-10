export default function InputBox(props) {

const handleChange = (e) => {
    props.handleChange(e.target)
}
    return (
        <div className="input--box">
            <h1 className="labels">{props.label}</h1>
            <div className={props.value === "0" ? "textbox error" : "textbox"}>
                {props.svg}
                <input className={props.value === "0" ? "error" : ""} onChange={handleChange} name={props.id} id={props.id} type="number" min="0" value={props.value} placeholder="0" />
            </div>
        </div>
    )
};