import { createStackNavigator, createAppContainer } from "react-navigation";
import Signup from  "../screens/Auth/Signup";
import Confirm from "../screens/Auth/Confirm";
import Login from "../screens/Auth/Login";
import AuthHome from "../screens/Auth/AuthHome";

 const AuthNavigation = createStackNavigator(
  {
    Login,
    AuthHome,
    Signup,
    Confirm
  },
  {
    headerMode: "none",
    defaultNavigationOptions: {
      gesturesEnabled: true
    }
  }
);

 export default createAppContainer(AuthNavigation);