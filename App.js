import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ButtonComponent from "./src/screens/ButtonComponent";
import ColorScreen from "./src/screens/ColorScreen";
import Component from "./src/screens/Component";
import CounterScreen from "./src/screens/CounterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageList from "./src/screens/ImageList";
import ListComponent from "./src/screens/ListComponent";
import SquareScreen from "./src/screens/SquareScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: Component,
    List: ListComponent,
    Button: ButtonComponent,
    ImageList: ImageList,
    Counter: CounterScreen,
    ColorScreen: ColorScreen,
    Square: SquareScreen
  },
  {
    initialRouteName: "Button",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
