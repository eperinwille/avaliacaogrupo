import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, ActivityIndicator } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Constants } from 'expo';
import axios from 'axios';
import RepoCard from '../components/RepoCard';

const MainScreen = props => {
    const [ repositoryName, setRepositoryName ] = useState("");
    const [ repositories, setRepositories ] = useState([]);
    const [ timerId, setTimerId ] = useState(0);
    const [ isLoading, setLoading ] = useState(false);

    setTimeout(() => {
        //props.navigation.navigate('Repository', { repo: { owner: { avatar_url: 'http://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2017/03/Avatar.jpg' }, full_name: 'merda', stargazers_count: 1 }});
    });

    useEffect(() => {
        if (timerId !== 0) {
            setLoading(true);
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
        setLoading(false);
    }

    const showRepositoryDetails = (repo) => {
        props.navigation.navigate('Repository', { repo });
    }

    return (
        <View style={styles.container}>
            <SearchBar value={repositoryName} onChangeText={setRepositoryName}/>
            {isLoading ? <ActivityIndicator size="large"/> : <></>}
            <ScrollView style={{flex:1}}>
            {repositories.map((repo, i) => (
                <RepoCard key={i} repo={repo} onPress={() => { showRepositoryDetails(repo) }}/>
            ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default MainScreen;
