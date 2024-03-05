import React from "react";

function Modal(props) {
    return (
        <>
        <div className="ModalBg"></div>        
            <div className="Pop">
                <span>Assign A Weaver</span>
                <hr></hr>
                <input
                    type="number"
                    placeholder="Weaver ID"
                    name="weaverId"
                    value={props.weaverId}
                    onChange={props.handleChange}
                ></input>
                <input
                    type="text"
                    placeholder="Weaver Name"
                    name="weaverName"
                    value = {props.weaverName}
                    onChange={props.handleChange}
                ></input>
                    <button id="Proceed" onClick={props.handleAssignWeaver}>Assign</button>
                    <button id="Cancel" onClick={props.handleCancel}>Cancel</button>
            </div>
            </>
    );
}

export default Modal;
