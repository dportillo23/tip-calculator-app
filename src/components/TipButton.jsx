export default function TipButton(props) {
    const handleClick = (e) => {
        e.stopPropagation();
        if (e.target.lastChild) {
            props.onClick(e.target)
            e.target.lastChild.checked = true;
            // e.target.classList.add("active")
        } else {
            // e.target.parentElement.classList.add("active")
            props.onClick(e.target.parentElement)
        }
    }
    return (
        <div className={props.currentTip == props.value ? "tip--btn active" : "tip--btn"} onClick={handleClick}>
            <label htmlFor={props.id}>{props.label}</label>
            <input name="tip" type="radio" value={props.value} id={props.id} />
        </div>
    )
};