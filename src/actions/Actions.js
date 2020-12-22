export const Options = (name) => {
    return {
        topBar: {
            title: {
                text: name
            }
        },
        bottomTab: {
            text: name
        }
    }
}

export const StackChildren = (componentName) => {
    return {
        stack: {
            id: componentName,
            children: [
                {
                    component: {
                        name: componentName
                    }
                }
            ],
            options: {
                bottomTab: {
                    icon: require("../home.png")
                }
            }
        }
    }
}

