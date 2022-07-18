import React from "react";
import '../css/UserCardComponent.css'

class UserCardComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render_card(){
        const cards_list= this.props.following_list.map((item)=>{
            return (
                <React.Fragment key={item['id']}>
            <div className="ui raised card" >
            <div className="content">
                <div className="header">{item['name']}</div>
                <div className="right floated author">
                    <img className="ui avatar image" alt="matt" src={item['profile_image_url']} /> 
                </div>
                <div className="meta">
                    <span className="category">{item['username']}</span>
                </div>
            </div>
            
        </div></React.Fragment>);
        });
        return cards_list
    }
    render() {
        return this.render_card();
    }
}

export default UserCardComponent;





















