import  { Navigation } from "react-native-navigation";
import { Options } from "./src/actions/Actions";
import App from "./src/components/App";
import Login from "./src/components/Login";
import Screen from "./src/components/screens/Screen";
import Settings from "./src/components/settings/Settings";
import Surface from "./src/components/surface/Surface";
import { loginRoot } from "./src/navigations/Root";

App.options = Options("Home");
Screen.options = Options("Screen");
Surface.options = Options("Surface");

Navigation.setDefaultOptions({
    statusBar: {
        backgroundColor: "blue"
    },
    topBar: {
        title: {
            color: "white"
        },
        background: {
            color: "blue"
        }
    }
});

Navigation.registerComponent("Login", () => Login);
Navigation.registerComponent("App", () => App);
Navigation.registerComponent("Screen", () => Screen);
Navigation.registerComponent("Surface", () => Surface);
Navigation.registerComponent("Settings", () => Settings);

Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot(loginRoot); 
});