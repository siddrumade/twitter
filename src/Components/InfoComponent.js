import React from "react";
import 'font-awesome/css/font-awesome.min.css';


class InfoComponent extends React.Component{
    
    render(){
        return <React.Fragment>

            <div className={`form-detail ${this.props.user_id !==''? "": "hide-div"}`}>
            
                    <h2>{this.props.name}</h2>
                    <div className="form-row">
                    <input type="text"  value= {this.props.description} className="input-text" placeholder="Description" disabled/>
                    </div>

                    <div className="form-row">
                    <input type="text"  value= {this.props.location} className="input-text" placeholder="Location" disabled/>
                    </div>
                    <div className="form-row">
                    <input type="text"  value= {this.props.created_at} className="input-text" placeholder="Created At" disabled/>
                    </div>
                    <div className="form-row-last">

                    <button name="submit" onClick={this.props.analyze} className={`register ${ this.props.loading === true ? 'btn-disable':''}`}  value="Analyze Account">
                    <i  className={`fa fa-spinner fa-spin ${ this.props.loading === true ? '':'hide-div'}`} style={{'fontSize': 24,color: "black"}}></i> Analyze Account
                    </button>
                    {/* <input type="submit" name="submit" onClick={this.props.analyze} className={`register ${ this.props.loading === true ? 'btn-disable':''}`}  value="Analyze Account" /> */}
                    </div>
                </div>
        </React.Fragment>
    }
}

export default InfoComponent;