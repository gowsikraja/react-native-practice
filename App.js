import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BusinessSearch from "./src/screens/BusinessSearch";
import ButtonComponent from "./src/screens/ButtonComponent";
import ColorScreen from "./src/screens/ColorScreen";
import Component from "./src/screens/Component";
import CounterScreen from "./src/screens/CounterScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ImageList from "./src/screens/ImageList";
import ListComponent from "./src/screens/ListComponent";
import SquareScreen from "./src/screens/SquareScreen";
import TextInputScreen from "./src/screens/TextInputScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: Component,
    List: ListComponent,
    Button: ButtonComponent,
    ImageList: ImageList,
    Counter: CounterScreen,
    ColorScreen: ColorScreen,
    Square: SquareScreen,
    TextInput: TextInputScreen,
    MainApp: BusinessSearch
  },
  {
    initialRouteName: "MainApp",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
