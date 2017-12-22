import Header from './components/header.js'
import Progress from './components/progress.js'
import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      progress: '-'
    }
  },
  componentDidMount() {
    $('#player').jPlayer({
      ready() {
        $('#player').jPlayer('setMedia', {
          mp3: 'http://oj4t8z2d5.bkt.clouddn.com/%E9%AD%94%E9%AC%BC%E4%B8%AD%E7%9A%84%E5%A4%A9%E4%BD%BF.mp3'
        }).jPlayer('play');
      },
      supplied: 'mp3',
      wmode: 'window'
    });
    $('#player').bind($.jPlayer.event.timeupdate, (e) =>{
      this.setState({
        progress: Math.round(e.jPlayer.status.currentPercentAbsolute)
      });
    });
  },
  componentWillUnmount() {
    $('#player').unbind('$.jPlayer.event.timeupdate')
  },
  render() {
    return (
      <div>
        <Header/>
        <Progress progress={this.state.progress}>
        </Progress>
      </div>
    ); 
  }
});

