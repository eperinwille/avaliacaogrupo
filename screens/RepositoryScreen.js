import React, { useState, useEffect } from 'React';
import { View, Text, StyleSheet, Image } from 'react-native'
import { Icon } from 'react-native-elements';
import { Container, Content, Tabs, Tab } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import axios from 'axios';
import Issue from '../components/Issue';

const RepositoryScreen = props => {
    const repo = props.navigation.getParam('repo');

    const [ issues, setIssues ] = useState([]);

    const getIssues = async () => {
        let response = await axios.get(`https://api.github.com/repos/${repo.full_name}/issues`);
        setIssues(response.data);
    }

    useEffect(() => {
        getIssues();        
    }, []);

    return (
        <Container style={styles.container}>
            <Image source={{ uri: repo.owner.avatar_url }} style={{width: 80, height: 80, borderRadius: 40}}/>
            <Text>{repo.full_name}</Text>
            <View style={styles.stars}>
                <Text>{repo.stargazers_count}</Text>
                <Icon name="star"/>
            </View>
            <Tabs>
                <Tab heading="ISSUES">
                    <Content>
                        {issues.map((issue, i) => (
                            <Issue key={i} issue={issue}/>
                        ))}
                    </Content>
                </Tab>

                <Tab heading="PULL REQUESTS">
                    <Text>pull requests</Text>
                </Tab>

                <Tab heading="COMMITS">
                    <Text>commits</Text>
                </Tab>
            </Tabs>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    stars: {
        flexShrink: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 20
    }
});

export default RepositoryScreen;
