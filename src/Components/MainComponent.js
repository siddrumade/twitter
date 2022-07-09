import React from "react";
import axios from 'axios';
import PublicMetricsComponent from "./PublicMetricsComponent";
import SearchComponent from "./SearchComponent";
import InfoComponent from "./InfoComponent";
import UserCardComponent from "./UserCardComponent";
import TwitterCardComponent from "./TwitterCardComponent"
import get_doughnut from "./DoughnutComonent";
import { TagCloud } from 'react-tagcloud'

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            username: '',
            name: '',
            profile_image_url: 'https://semantic-ui.com/images/wireframe/white-image.png',
            profile_image_url_small: '',
            followers: '0',
            following: '0',
            tweets: '0',
            location: '',
            description: '',
            protected: '',
            created_at: '',
            verified: false,
            tweets_list: [],
            followers_list: [],
            following_list: [],
            words: []
        }

        this.fetchData = this.fetchData.bind(this);
        this.onUserInputChange = this.onUserInputChange.bind(this);
        this.fetch_tweets = this.fetch_tweets.bind(this);
        this.analyze = this.analyze.bind(this);

    }
    componentDidUpdate(prevProps, prevState) {
        // console.log('Prev state', prevState); // Before update
        // console.log('New state', this.state); // After update
        if (prevState.tweets_list.length !== this.state.tweets_list.length) {
            // Now fetch the new data here.
            get_doughnut(this.state.user_id);

        }

    }
    fetch_tweets() {
        const fetch = async () => {
            console.log('fetching tweets...............')
            const url = "http://127.0.0.1:8000/tweets/" + this.state.user_id
            await axios.get(url)
                .then((response) => {
                    console.log('fetch tweets response---', response)
                    const data = response['data']['data'];
                    this.setState({ tweets_list: data });

                }).catch(error => {
                    console.log('invalid user', error);
                });
        }
        fetch();
    }
    WordCloud() {
        const fetch = async () => {
            const url = "http://127.0.0.1:8000/wordcloud/" + this.state.user_id
            await axios.get(url)
                .then((response) => {
                    const words_dict = response['data']['data'];
                    var words = [];
                    Object.entries(words_dict).forEach(([k, v]) => {
                        words.push({ value: k, count: v });
                    });
                    this.setState({ words : words });

                }).catch(error => {
                    console.log('invalid user', error);
                    return [];
                });
        }
        fetch();
    }

    analyze() {
        this.fetch_tweets();
        this.fetch_following();
        this.WordCloud();


    }
    fetch_following() {
        const fetch = async () => {
            const url = "http://127.0.0.1:8000/following/" + this.state.user_id
            await axios.get(url)
                .then((response) => {
                    console.log('fetch following response---', response)
                    const data = response['data']['data'];
                    this.setState({ following_list: data })

                }).catch(error => {
                    console.log('invalid user', error);
                });
        }
        fetch();
    }
    fetch_accout() {
        const fetch = async () => {
            const url = "http://127.0.0.1:8000/info/" + this.state.username
            await axios.get(url)
                .then((response) => {
                    const data = response['data']['data'][0];
                    const image = data['profile_image_url'].replace('normal', '400x400');
                    this.setState({ profile_image_url: image });
                    this.setState({ profile_image_url_small: data['profile_image_url'] });
                    this.setState({ followers: data['public_metrics']['followers_count'] });
                    this.setState({ following: data['public_metrics']['following_count'] });
                    this.setState({ tweets: data['public_metrics']['tweet_count'] });
                    this.setState({ user_id: data['id'] });
                    this.setState({ name: data['name'] });
                    this.setState({ location: data['location'] });
                    this.setState({ description: data['description'] });
                    this.setState({ protected: data['protected'] });
                    this.setState({ created_at: data['created_at'] });
                    this.setState({ verified: data['verified'] });



                }).catch(error => {
                    console.log('invalid user', error);
                });
        }
        fetch();
    }
    fetchData(e) {
        e.preventDefault();
        console.log('clicked', this.state.username)
        this.fetch_accout();


    }
    onUserInputChange(e) {
        this.setState({ username: e.target.value })
    }

    render() {
        return (<React.Fragment>
            <div className="form-v6-content">
                <div className="form-left">
                    <img className="ui large circular image" src={this.state.profile_image_url} alt="form" />
                </div>
                <SearchComponent onSubmit={this.fetchData} user_id={this.state.user_id} username={this.state.username} onUserInputChange={this.onUserInputChange} />
                <InfoComponent user_id={this.state.user_id} name={this.state.name} description={this.state.description} location={this.state.location} created_at={this.state.created_at} analyze={this.analyze} />
            </div>
            <PublicMetricsComponent followers={this.state.followers} following={this.state.following} tweets={this.state.tweets} user_id={this.state.user_id} />
            <div className={`form-v6-content analyzer-container ${this.state.following_list.length > 0 ? "" : "hide-div"}`}>
                <div className="">
                    <h3 className="header">{this.state.name} Following</h3>
                    <div className="follow-container">
                        <UserCardComponent following_list={this.state.following_list} />
                    </div>
                </div>
            </div>
            <div className={`form-v6-content analyzer-container ${this.state.following_list.length > 0 ? "" : "hide-div"}`}>
                <div className="">
                    <h3 className="header">{this.state.name} Tweets</h3>
                    <div className="follow-container" >
                        <TwitterCardComponent tweets_list={this.state.tweets_list} username={this.state.username} image={this.state.profile_image_url_small} />
                    </div>
                </div>
            </div>
            <div className={`form-v6-content analyzer-container ${this.state.following_list.length > 0 ? "" : "hide-div"}`}
                style={{ position: 'relative', height: '400px' }} >
                <div style={{ position: 'absolute', width: '45%', height: '100%', left: 0, top: 50 }}>
                    <TagCloud
                        minSize={12}
                        maxSize={35}
                        tags={this.state.words}
                        onClick={tag => alert(`'${tag.value}' was selected!`)}
                    />
                </div>
                <div style={{ position: 'absolute', width: '45%', height: '70%', right: 0, top: 50 }}>
                    <canvas id="canvas1" ></canvas>
                </div>
            </div>



        </React.Fragment>);
    }
}


export default MainComponent;