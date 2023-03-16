import React from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import Title from "./components/Title";
import User from "./components/User";

const user = { // we builded the constructor to the main to return data in the format of the object or array at Console.
    name : "Celine Ozdemir",
    city : "Istanbul",
    age : 20
}

const App=()=>{
    return(
        <View style = {style.container}>
            <Title text = "React Native " color = "red" numberOfLines={1}></Title>
            <Title text = "React Native " color = "purple" numberOfLines={2}></Title>
            <Title text = "React Native " color = "green" numberOfLines={3}></Title>
            <Title text = "React Native " color = "blue" numberOfLines={4}></Title>
            <div>
                <User data= {user} friends = {['Zeynep', 'Sena', 'Nesli']}/>
            </div>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center",
        alignContent:"center",

    }
})
export default App;