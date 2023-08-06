import HomeScreen from "@/components/pages/Home";
import SignInScreen from "@/components/pages/Login/SignInScreen";
import SignUpScreen from "@/components/pages/Login/SignUpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type Props = {
};

const Stack = createNativeStackNavigator();

const ProtectedNavStack: React.FC<Props> = ({
  }) => {

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
              <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )

}

export default ProtectedNavStack
