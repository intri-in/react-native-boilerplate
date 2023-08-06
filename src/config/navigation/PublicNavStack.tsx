import SignInScreen from "@/components/pages/Login/SignInScreen";
import SignUpScreen from "@/components/pages/Login/SignUpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type Props = {
};

const Stack = createNativeStackNavigator();

const PublicNavStack: React.FC<Props> = ({
  }) => {

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
    )

}

export default PublicNavStack
