import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ButtonComponent from "./src/screens/ButtonComponent";
import Component from "./src/screens/Component";
import CounterScreen from "./src/screens/CounterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageList from "./src/screens/ImageList";
import ListComponent from "./src/screens/ListComponent";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: Component,
    List: ListComponent,
    Button: ButtonComponent,
    ImageList: ImageList,
    Counter: CounterScreen
  },
  {
    initialRouteName: "Button",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
