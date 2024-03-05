function RequestForm(props) {
    return (

        <div className="form">
            <input name="customerName" value={props.customerName} placeholder="Enter the customer name" onChange={props.handleChange}/>
            <input type="number" name="contactNumber" value ={props.contactNumber} placeholder="Enter the contact number" onChange={props.handleChange}/>
            <input name="design" value={props.design} placeholder="Enter the design" onChange={props.handleChange}/>
            <button className="Clear" onClick={props.handleClear}>Clear</button>
            <button className="Confirm" onClick={props.handleConfirm}>Confirm</button>
        </div>
    )
}

export default RequestForm;