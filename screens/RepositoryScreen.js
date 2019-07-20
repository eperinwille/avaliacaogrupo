import React from 'React';
import { View, Text, StyleSheet } from 'react-native'
import { Container, Tabs, Tab } from 'native-base'

const RepositoryScreen = props => {
    return (
        <Container>
            <Tabs>
                <Tab heading="ISSUES">
                    <Text>issues</Text>
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
        flex: 1,
        marginTop: 20
    }
});

export default RepositoryScreen;
