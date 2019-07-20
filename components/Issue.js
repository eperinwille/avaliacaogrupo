import React from 'react';
import { ListItem } from 'react-native-elements';

const Issue = props => {
    return (
      <ListItem
        title={props.issue.title}
        subtitle={props.issue.user.login}
        leftAvatar={{ icon: { name: 'error-outline', color: props.issue.state == 'open' ? 'green' : 'red' }, overlayContainerStyle: { backgroundColor: '#fff' } }}
        rightTitle={`#${props.issue.number}`}
        />
    )
}

export default Issue;