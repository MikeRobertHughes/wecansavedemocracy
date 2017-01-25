import React, { Component } from 'react';
import { RepInfoDisplay, renderChannels, renderUrls, renderOfficialAddresses, renderOfficialTitle, renderOfficialPhoneNumbers, colors } from '../../containers/FindRep/renderRepData';

const styles = {
  officialName: {
    color: colors.highlight,
    margin: '0 0 5px',
    fontSize: '125%'
  },
  list: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  listItem: {
    borderTop: '1px solid #ccc',
    padding: '10px 0'
  },
  listItemHeader: {
    fontSize: '16px'
  }
}

class RepData extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        stuff
      </div>
    )
  }

}

class UserSelectedRepList extends Component {
  constructor (props) {
    super(props);
  }

  renderIndivReps (repObj, key) {
    return (
      <li
        key={key}
        style={styles.listItem}>
        <div style={styles.listItemHeader}>{repObj.officialName}</div>



        // <h3>{repObj.name}</h3>
        // {renderOfficialTitle(officialsData, key)}
        // {renderOfficialAddresses(repObj.address)}
        // {renderOfficialPhoneNumbers(repObj.phones)}
        // Party: <strong>{repObj.party}</strong>
        // {renderUrls(repObj.urls)}
        // {renderChannels(repObj.channels)}

        <div>
          hello
        </div>
      </li>
    )
  }

  repListItems () {
    return this.props.activities[this.props.indexOfCurrentRow].selectedReps.map((rep, key) => {

      return (
        <li
          key={key}
          style={styles.listItem}>
          <div style={styles.listItemHeader}>{rep.officialName}</div>
          <RepInfoDisplay
            repData={rep}
            officialsData={this.props.activities}
          />
        </li>
      )
    });
  }

  render () {
    if (!this.props.activities[this.props.indexOfCurrentRow].hasOwnProperty('selectedReps')) {
      return null;
    }

    return (
      <ul
        style={styles.list}
      >
        {this.repListItems()}
      </ul>
    )
  }
}


//export default connect(mapStateTothis.props, {})(IndividualActivity);

export default UserSelectedRepList;
