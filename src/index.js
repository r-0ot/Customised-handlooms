import { Component } from "react";
import ReactDOM from "react-dom";
import './index.css';
import RequestForm from "./Component/RequestForm";
import TableContent from "./Component/TableContent";
import Modal from "./Component/Modal";

class App extends Component {
  state = {
    data: [],
    customerName: "",
    contactNumber: "",
    design: "",
    show: "Form",
    showModal: false,
    id: "",
    weaverId: "",
    weaverName: ""
  }

  componentDidMount(){
    const storedData=localStorage.getItem("MyAppData");
    if(storedData != null)
     this.setState({data: JSON.parse(storedData)}) ; 

  }

  componentDidUpdate(prevState){
   if(prevState.data != this.state.data)
    localStorage.setItem("MyAppData", JSON.stringify(this.state.data));
  }
//handle which content should be shown to the user

  handleContent = (show) => {
this.setState({show: show});
  }

  //handle onChange of input fields
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  //handles the confirm button in RequestForm components
  
  handleConfirm = () => {
    var reqobj = { "contactNumber": this.state.contactNumber,
     "customerName": this.state.customerName,
      "design": this.state.design,
       "id": this.state.data.length + 1,
        "status": "NotAssigned",
        "weaverId": "", 
        "weaverName": "" };
    this.state.data.push(reqobj);
    this.setState({     id: "",
        customerName:"" ,
         contactNumber: "",
         design: "",
         weaverId: "",
         weaverName: "",
         status: "NotAssigned"
       });
       window.alert("Order requested");
  }
  
//clears the input fields
  handleClear = () => {
this.setState({     id: "",
        customerName:"" ,
         contactNumber: "",
         design: "",
         weaverId: "",
         weaverName: "",
         status: "NotAssigned"
       });
  }

 // a modal should be displayed to get weaver details
 
  handleWeave = (id) => {
   this.setState({showModal: true, id: id}); 
  }

  //Assign a weaver 
  
  handleAssignWeaver = () => {
    
    var id = this.state.id - 1;
    var reqobj = { "contactNumber": this.state.data[id].contactNumber,
     "customerName": this.state.data[id].customerName,
      "design": this.state.data[id].design,
       "id": id + 1,
        "status": "Assigned",
        "weaverId": this.state.weaverId, 
        "weaverName": this.state.weaverName };
    this.setState((prevState) => ({data : prevState.data.map(item => item.id === reqobj.id ? reqobj : item)}));
    this.setState({
      showModal: false,
      weaverId: "",
      weaverName: ""
    })
  }

 //handles the sell button
 
  handleSell = (id) => {
    var reqobj = { "contactNumber": this.state.data[id-1].contactNumber,
     "customerName": this.state.data[id-1].customerName,
      "design": this.state.data[id-1].design,
       "id": id,
        "status": "Sold",
        "weaverId": this.state.data[id-1].weaverId, 
        "weaverName": this.state.data[id-1].weaverName };
    this.setState((prevState) => ({data : prevState.data.map(item => item.id === reqobj.id ? reqobj : item)}));
  }

 //hides the modal and clears the input field values in the modal
  handleCancel = () => {
    this.setState({
      showModal: false,
      weaverId: "",
      weaverName: ""
    })
  }


  render() {
    return (
      <div>
        <nav>
          <h1>Request for customised handlooms</h1>
          <div className="navbar">
            <button className={`nav-button ${this.state.show == "Form" ? "active" : ""}`} onClick={() => this.handleContent("Form")}>Request for order</button>
            <button className={`nav-button ${this.state.show == "Assigned" ? "active" : ""}`} onClick={() => this.handleContent("Assigned")}>Assigned</button>
            <button className={`nav-button ${this.state.show == "NotAssigned" ? "active" : ""}`} onClick={() => this.handleContent("NotAssigned")}>Not Assigned</button>
            <button className={`nav-button ${this.state.show == "Sold" ? "active" : ""}`} onClick={() => this.handleContent("Sold")}>Sold</button>
          </div>
        </nav>
        { this.state.show == 'Form' && <div className="layout">
            <h1 className="formTitle">Request Your Order</h1>
            <RequestForm
              customerName={this.state.customerName}
              contactNumber={this.state.contactNumber}
              design={this.state.design}
              handleChange={this.handleChange}
              handleClear={this.handleClear}
              handleConfirm={this.handleConfirm}
            /> </div>}
        {this.state.showModal &&
        <Modal
          handleAssignWeaver={this.handleAssignWeaver}
          handleChange={this.handleChange}
          weaverId={this.state.weaverId}
          weaverName={this.state.weaverName}
          handleCancel={this.handleCancel}
        />}
        
            
            <TableContent
              show={this.state.show}
              handleWeave={this.handleWeave}
              handleSell={this.handleSell}
              data={this.state.data}
            />
      </div >
    )
  }
}

export default App;

ReactDOM.render(<App/>, document.getElementById("root"));