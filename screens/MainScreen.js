import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import RepoCard from '../components/RepoCard';

const MainScreen = props => {
    return (
        <View style={styles.container}>
            <RepoCard/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default MainScreen;
