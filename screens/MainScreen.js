import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Constants } from 'expo';
import axios from 'axios';
import RepoCard from '../components/RepoCard';

const MainScreen = props => {
    const [ repositoryName, setRepositoryName ] = useState("");
    const [ repositories, setRepositories ] = useState([]);
    const [timerId, setTimerId] = useState(0);

    useEffect(() => {
        if (timerId !== 0) {
            clearTimeout(timerId);
            setTimerId(0);
        }

        const id = setTimeout(() => {
            if (repositoryName !== "") {
                search();
            }
        }, 1000);

        setTimerId(id);
    }, [repositoryName]);

    async function search() {
        let result = await axios.get(`https://api.github.com/search/repositories?q=${repositoryName}`);
        setRepositories(result.data.items);
    }

    return (
        <View style={styles.container}>
            <SearchBar value={repositoryName} onChangeText={setRepositoryName}/>
            <ScrollView style={{flex:1}}>
            {repositories.map((repo, i) => (
                <RepoCard key={i} repo={repo}/>
            ))}
            </ScrollView>
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
