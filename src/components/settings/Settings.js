import React from 'react';
import { Text, View } from 'react-native';
import  { Navigation } from "react-native-navigation";
import GlobalStyle from '../GlobalStyle';

export default class Settings extends React.Component {
    
    componentDidMount() {
        this.navigationEventListener = Navigation.events().bindComponent(this);
    }
    
    componentWillUnmount() {
        if (this.navigationEventListener) {
            this.navigationEventListener.remove();
        }
    }

    componentDidAppear() {
        console.log("appear");
    }

    componentDidDisappear() {
        console.log("disappear")
    }
    
    render() {
        return(
            <View style={GlobalStyle.container}>
                <Text>Settings</Text>
            </View>
        );
    }
}