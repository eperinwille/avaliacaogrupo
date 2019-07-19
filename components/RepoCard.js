import React from 'react';
import { ListItem } from 'react-native-elements';

const RepoCard = props => {
    return (
      <ListItem
        title="merda"
        subtitle="Um repositório que só tem merda e não serve pra porra nenhuma"
        leftAvatar={{ source: { uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" } }}
        rightIcon={{ name: 'star'}}
        rightTitle="100"
        />
    )
}

export default RepoCard;