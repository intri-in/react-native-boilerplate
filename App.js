import '@/i18n';
import Navigation from '@/components/common/Navigation';
import * as React from 'react';
import {
  MD3LightTheme as DefaultTheme,
  PaperProvider,
} from 'react-native-paper';
import * as customTheme from '@/config/styles/theme.json'

export default function App({ navigation }) {


const theme = {
  ...DefaultTheme,
  colors: customTheme.colors, 
};

  return(
    <PaperProvider theme={theme}>
      <Navigation navigation={navigation} />
    </PaperProvider>
  )

}

