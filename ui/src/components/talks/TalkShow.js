import React from "react";
import { connect } from 'react-redux';

import { getTalk } from "../../actions";
import Loading from "../Loading";

class TalkShow extends React.Component {

  componentDidMount() {
    this.props.getTalk( this.props.match.params.id );
  }

  renderRecording() {
    const recording = this.props.talk.Recording;
    if (recording) {
      return(
        <div className={'ui embed'}>
          <iframe title={'Video Player'} src={recording} />
        </div>
      );
    }
  }

  render() {
    if ( !this.props.talk ) {
      return (
        <div className="ui container">
          <Loading show={true} message={'Loading'} />
        </div>
      );
    }

    const talk = this.props.talk;
    return(
      <div>
        {this.renderRecording()}
        <h1>{ talk.Topic }</h1>
        <h5>{ talk.Presenter}</h5>
        <h5>{ talk.Description }</h5>
      </div>
    );
  }
}

const mapStateToProps = ( state, ownProps ) => {
  return { talk: state.talks[ ownProps.match.params.id ]};
}

export default connect(mapStateToProps, { getTalk })(TalkShow);
