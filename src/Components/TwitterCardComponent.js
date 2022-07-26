import React from "react";

class TwitterCardComponent extends React.Component {
   
    render_card() {
        const cards_list = this.props.tweets_list.map((item) => {
            return (
                <React.Fragment key={item['id']}>
                    <div className="ui comments">
                        {/* <h3 className="ui dividing header">Comments</h3> */}
                        <div className="comment">
                            <a className="avatar" href="/#">
                                <img alt="profile" src={this.props.image} />
                            </a>
                            <div className="content">
                                <a className="author">{this.props.username}</a>
                                <div className="metadata">
                                    <span className="date">{item.created_at}</span>
                                </div>
                                <div className="text">
                                    {item.text}
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </React.Fragment>);
        });
        return cards_list
    }
    render() {
        return this.render_card();
    }
}

export default TwitterCardComponent;





















