import React from "react";

class PublicMetricsComponent extends React.Component{
    
    render(){
        return <React.Fragment>
            <div  className={`form-v6-content public_metrics ${this.props.user_id !== '' ? "slide-in-from-right": "hide-div" }`}>
                <div id="public_metrics-box" >
                    <div className="public_metrics-card">
                        <h3 className="public_metrics-text">{this.props.followers}</h3>
                        <span>Followers</span>
                    </div>
                    <div className="public_metrics-card">
                        <h3 className="public_metrics-text">{this.props.following}</h3>
                        <span>Following</span></div>
                    <div className="public_metrics-card">
                        <h3 className="public_metrics-text">{this.props.tweets}</h3>
                        <span>Tweets</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    }
}

export default PublicMetricsComponent;