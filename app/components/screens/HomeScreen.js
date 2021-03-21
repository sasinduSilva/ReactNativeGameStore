import React from 'react';
import { View, StyleSheet,StatusBar } from 'react-native';
import styled from "styled-components";
import Text from "../Text";



function HomeScreen(props) {
    return (
        <Container>

            <StatusBar barStyle="light-content" />
            <Header>
                <Text large>
                    Hello{" "}
                    <Text large bold>
                        DesignIntoCode,
                    </Text>
                    {`\n`}
                    <Text large bold>
                        Best games for today
                    </Text>
                </Text>
                <Avatar source={require('')} />
            </Header>

        </Container>

    );
}

const Container = styled.SafeAreaView`
    flex:1; 
    background-Color:#343434;
    
    
    `;

const Header = styled.View``;

const Avatar = styled.Image``;

export default HomeScreen;