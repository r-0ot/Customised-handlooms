
function TableContent(props) {
    const { show, data } = props;
    return (

<>        {show != "Form" && <div className="layout">
    <h1 className="formTitle">{show} List</h1>
        <table>
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>Customer Name</th>
                    <th>Contact Number</th>
                    <th>Design</th>
                    <th>Weaver ID</th>
                    <th>Weaver Name</th>  
                    <th></th>                  
                </tr>
            </thead>
            <tbody>
                    {(show == "Assigned") ? data.filter(ele => ele.status == "Assigned").length != 0 ? data.filter(ele => ele.status == "Assigned").map((item) =>
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.customerName}</td>
                    <td>{item.contactNumber}</td>
                    <td>{item.design}</td>
                    <td>{item.weaverId}</td>
                    <td>{item.weaverName}</td>
                    <td><button onClick={() => props.handleSell(item.id)}>Sell</button></td>
                    </tr>) : <tr><td colSpan="7">None</td></tr>
                    :
                    (show == "Sold") ? data.filter(ele => ele.status == "Sold").length != 0 ? data.filter(ele => ele.status == "Sold").map((item) =>
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.customerName}</td>
                    <td>{item.contactNumber}</td>
                    <td>{item.design}</td>
                    <td>{item.weaverId}</td>
                    <td>{item.weaverName}</td>
                    </tr>) : <tr><td colSpan="7">None</td></tr>
                    : data.filter(ele => ele.status == "NotAssigned").length != 0 ? data.filter(ele => ele.status == "NotAssigned").map((item) =>
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.customerName}</td>
                    <td>{item.contactNumber}</td>
                    <td>{item.design}</td>
                    <td></td>
                    <td></td>
                    <td><button onClick={() => props.handleWeave(item.id)}>Weave</button></td>
                    </tr>) : <tr><td colSpan="7">None</td></tr>
                    }
            </tbody>
        </table>
        </div>
    }
    </>)
}

export default TableContent;