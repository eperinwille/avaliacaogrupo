import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Constants } from 'expo';
import RepoCard from '../components/RepoCard';

const MainScreen = props => {
    const [ repositoryName, setRepositoryName ] = useState("");

    return (
        <View style={styles.container}>
            <SearchBar value={repositoryName} onChangeText={setRepositoryName}/>
            <RepoCard/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    }
});

export default MainScreen;
