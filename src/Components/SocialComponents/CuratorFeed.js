import React from 'react';
//import {TwitterTimelineEmbed} from 'react-twitter-embed';


class CuratorFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var i, e, d = document, s = "script";
        i = d.createElement("script");
        i.async = 1;
        i.src = this.props.feedID;
        e = d.getElementsByTagName(s)[0];
        e.parentNode.insertBefore(i, e);

    }

    render() {
        return (
            <div id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div>
        );
    }
}

export default CuratorFeed;
