import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Component from "./src/screens/Component";
import ListComponent from "./src/screens/ListComponent";
import ButtonComponent from "./src/screens/ButtonComponent";
import ImageList from "./src/screens/ImageList";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: Component,
    List: ListComponent,
    Button:ButtonComponent,
    ImageList: ImageList
  },
  {
    initialRouteName: "Button",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
