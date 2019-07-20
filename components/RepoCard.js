import React from 'react';
import { ListItem } from 'react-native-elements';

const RepoCard = props => {
    return (
      <ListItem
        title={props.repo.name}
        subtitle={props.repo.description}
        leftAvatar={{ source: { uri: props.repo.owner.avatar_url } }}
        rightIcon={{ name: 'star'}}
        rightTitle={`${props.repo.stargazers_count}`}
        onPress={props.onPress}
        />
    )
}

export default RepoCard;