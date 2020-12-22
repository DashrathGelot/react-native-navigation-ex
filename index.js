import  { Navigation } from "react-native-navigation";
import App from "./src/components/App";
import {name as appName} from './app.json';

App.options = {
    statusBar: {
        backgroundColor: "blue"
    },
    topBar: {
        title: {
            text: "Home",
            color: "white"
        },
        background: {
            color: "blue"
        }
    }
}

Navigation.registerComponent("App", () => App);

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'App'
                        }
                    }
                ]
            }
        }    
    });
})