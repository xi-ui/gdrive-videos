import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { listTalks } from "../../actions";
import TalkSearch from "./TalkSearch";

class TalkList extends React.Component {
  componentDidMount() {
    this.props.listTalks();
  }

  renderList() {
    return this.props.talks.map( (talk) => {
      if (talk.show) {
        return (
          <div className="item" key={talk.id}>
            <i className="large middle aligned icon video"/>
            <div className="content">
              <Link to={`/talks/show/${talk.id}`}
                    className={'header'}
              >
                {talk.Topic}
              </Link>
              <div className="description">
                <h5>{talk.Presenter}</h5>
                {talk.Description}
              </div>
            </div>
          </div>
        );
      }
    });
  }

  render() {
    return(
      <div>
        <h2>Talks</h2>
        <TalkSearch />
        <div className="ui celled list">
          { this.renderList() }
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
    signedIn: state.auth.signedIn,
    currentUserId: state.auth.userId,
    talks: Object.values(state.talks)
  };
};

export default connect(mapStateToProps, { listTalks })(TalkList);
