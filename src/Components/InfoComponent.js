import React from "react";

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
                        <input type="submit" name="submit" onClick={this.props.analyze} className="register" value="Analyze Account" />
                    </div>
                </div>
        </React.Fragment>
    }
}

export default InfoComponent;