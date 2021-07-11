
import ReactPlayer from 'react-player'
import React from 'react';
import { connect } from 'react-redux'
import { addPlayTime } from '../../actions/usageTracking'

class VideoPlayer extends React.Component {
    player = React.createRef(null);
    state = {
        playedTime: 0,
        played: false,
        timer: null,
        playing: false,
    }
    handlePlay = () => {
        const timer = window.setInterval(() => this.setState((prevState) => ({
            playedTime: prevState.playedTime + 1,
        })), 1000)
        this.setState(() => ({ played: true, timer, }))
    }
    handlePause = () => {
        const { timer } = this.state
        window.clearInterval(timer)
    }
    componentWillUnmount() {
        const { playedTime, played } = this.state

        if (played)
            this.props.dispatch(addPlayTime(playedTime))
    }
    componentDidMount() {
        console.log(this.player.current)
        window.setTimeout(this.setObserver, 1000)
    }
    setObserver = () => {
        const { id } = this.props
        let options = {
            rootMargin: "0px",
            threshold: 1.0
        };

        let handlePlay2 = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.setState(() => ({ playing: true, }))
                } else {
                    this.setState(() => ({ playing: false, }))
                }
            });
        };

        let observer = new IntersectionObserver(handlePlay2, options);
        const el = document.getElementById(id)
        observer.observe(el);
    }
    render() {
        const { videoUrl } = this.props
        return (
            <ReactPlayer url={videoUrl} width={"auto"} height={"30vh"}
                light controls
                ref={this.player}
                playing={this.state.playing}
                muted={true}
                config={{
                    youtube: {
                        playerVars: {
                            mildmodestbranding: 1,
                            fs: 0
                        }
                    },
                }}
                onEnded={() => {
                    this.setState(() => ({ playing: false }))
                    this.player.current.showPreview()
                }}
                onClickPreview={() => {
                    this.setState(() => ({ playing: true }))
                    this.handlePlay()
                }}
                onPause={() => {
                    this.setState(() => ({ playing: false }))
                    this.handlePause()
                }}
            />
        )
    }
}

export default connect()(VideoPlayer)