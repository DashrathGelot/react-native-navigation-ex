import { Navigation } from "react-native-navigation"
import { StackChildren } from "../actions/Actions"


export const mainRoot = {
    root: {
        bottomTabs: {
            children: [
                StackChildren("App"),
                StackChildren("Screen"),
                StackChildren("Surface")
            ],
            options: {
                animated: true
            }
        }
    }
}

export const loginRoot = {
    root: {
        component: {
            name: 'Login'
        }
    }
}

export function push(id, component) {
    Navigation.push(id, {
        component: {
            name: component
        }
    });
}