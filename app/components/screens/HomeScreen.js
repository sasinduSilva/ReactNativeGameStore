import React, {useState, useRef} from 'react';
import { View, StyleSheet,StatusBar,Image } from 'react-native';
import styled from "styled-components";
import Text from "../Text";
import CategoryList from "../Categories";
import GameData from "../GameData";




function HomeScreen(props) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const gamesRef = useRef();

    const changeCategory = (category) =>{
        gamesRef.current.scrollToOffset({x:0, y:0}); 
        setSelectedCategory(category);
    }

    const GameItem = (game) =>{

        return (
            <Game>
                <GameCover source={game.cover} />

                <GameInfo backgroundColor={game.backgroundColor}>
                    <GameImage source={game.cover} />
                    <GameTitle>
                        <Text medium bold>{game.title}</Text>
                        <Text small>{game.teaser}</Text>
                    </GameTitle>
                </GameInfo>
            </Game>
        )
    }
    return (
        <Container>

            <StatusBar barStyle="light-content" />
            <Header>
                <Text large>
                    
                    <Text large bold>
                        EFT Game Store,
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
                            {selectedCategory === category && <CategoryDot />}
                        </Category>
                    )
                })}
            </Categories>
            <Games data={GameData.filter(game => {

                return game.category.includes(selectedCategory) || selectedCategory === "All";

            })} keyExtractor={item => String(item.id)} renderItem={({item}) => GameItem(item)}
                ref={gamesRef}
            
            />

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

const Games = styled.FlatList`
    margin-top: 32px;
    flex: 1;

`; 

const CategoryDot = styled.View`

    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: #819ee5;

`;

const Game = styled.TouchableOpacity`

    margin-bottom: 32px;

`;

const GameCover = styled.Image`

    height: 300px;
    width: 100%;

`; 

const GameInfo = styled.View`

    margin: -50px 16px 0 16px;
    padding: 16px;
    border-radius: 12px;
    flex-direction: row;
    align-items: center;

`;

const GameImage = styled.Image`

    width: 50px;
    height: 40px;
    border-radius: 8px;

`;

const GameTitle = styled.View`

    margin: 0 24px;

`;

export default HomeScreen;