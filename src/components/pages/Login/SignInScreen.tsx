import { Text } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { initReactI18next, useTranslation } from 'react-i18next';
import i18next from '@/i18n';
export type Props = {
};
  
const SignInScreen: React.FC<Props> = ({
  }) => {
    
    const {i18n } = useTranslation();

    return(
        <SafeAreaView style={{flex: 1, }}>
          <Text>{i18n.t("app_name")}</Text>
        </SafeAreaView>
    )

}

export default SignInScreen
