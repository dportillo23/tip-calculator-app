export default function Display(props) {

    const handleClick = () => {
        props.handleClick()
    }

    return (
        <div className="display--container">
            <div className="display--totals">
                <div className="display-section">
                    <div className="display-labels">
                    <h3>Tip Amount</h3>
                    <p>/ person</p>
                    </div>
                    <div className="display">
                    <span>$</span>
                    <span>{(Math.round(props.output.tip * 100) / 100).toFixed(2)}</span>
                    </div>
                </div>
                <div className="display-section">
                    <div className="display-labels">
                        <h3>Total</h3>
                        <p>/ person</p>
                    </div>
                    <div className="display">
                    <span>$</span>
                    <span>{(Math.round(props.output.total * 100) / 100).toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <button onClick={handleClick} className="display-btn" disabled={props.bill || props.people || props.tip || props.customTip ? false : true}>RESET</button>
        </div>
    )
};