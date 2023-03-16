import  React,{Component} from 'react';
import {AppRegistry , Platform, StyleSheet, Text, TextInput, TouchableHighlight, View,} from 'react-native';
import PropsTypes from 'prop-types';

class Launch extends Component{
    static propTypes = {
        // The props that a component(data) takes (and uses) 
        //defines how it can be controlled from the outside.
        // name : PropsTypes.string.isRequired,
        // isTrue : PropsTypes.boolean.isRequired
      
    }

    render(){ // Where we make the UI design.
        return(
            <View style = {styles.contentTsx}>
                <Text>Hi {this.props.}</Text>
            </View>
            

        );
    }
}
const styles = StyleSheet.create({  // here where we make the all the UI. 
     contentTsx :{
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        position: 'absolute',
        right: 0,
        bottom: '2rem',
        padding: '0.5rem',
        fontFamily: 'sans-serif',
        fontSize: '1.5rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
    },

});
