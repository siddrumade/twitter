import React from "react";

class SearchComponent extends React.Component{
    
    render(){
        return <React.Fragment>
            <form className={`form-detail ${this.props.user_id ===''? "": "hide-div"}`} onSubmit={this.props.onSubmit}>
                    <h2>Twitter Analysis</h2>
                    <div className="form-row">
                        <input type="text" name="username" value={this.props.username} onChange={this.props.onUserInputChange} id="twitterid" className="input-text" placeholder="Enter Twitter Id (eg. BillGates)" required />
                    </div>
                    <div className="form-row-last">
                        <input type="submit" name="submit" className="register" value="Submit" />
                    </div>
                </form>
        </React.Fragment>
    }
}

export default SearchComponent;