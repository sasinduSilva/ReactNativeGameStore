import React, {useState} from 'react';
import { View, StyleSheet,StatusBar,Image } from 'react-native';
import styled from "styled-components";
import Text from "../Text";
import CategoryList from "../Categories";



function HomeScreen(props) {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const changeCategory = (category) =>{
        setSelectedCategory(category);
    }
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
                <Avatar source={require("../../assets/EFTLogo.png")} />
            </Header>
            <Categories horizontal={true} showHorizontalScrollIndicator={false}>
                {CategoryList.map((category,index) => {
                    return (
                        <Category key={index} onPress={() => changeCategory(category)}>
                            <CategoryName selected={selectedCategory === category ? true :false}>
                                {category}
                            </CategoryName>
                        </Category>
                    )
                })}
            </Categories>

        </Container>

    );
}

const Container = styled.SafeAreaView`
    flex:1; 
    background-Color:#343434;
    
    
    `;

const Header = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content: space-between;
    margin: 10px 32px 0 32px;
`;

const Avatar = styled.Image`
    width:40px;
    height:40px;

`;

const Categories = styled.ScrollView`

    margin-top: 32px;
    flex-grow: 0;


`;

const Category = styled.TouchableOpacity`
    align-items:center;
    margin: 0 16px;
    height: 32px;

`;

const CategoryName = styled(Text)`

    color: ${(props) => (props.selected ? "#819ee5" : "#9a9a9a")};
    font-weight: ${(props) => (props.selected ? "700" : "500")};

`;

export default HomeScreen;