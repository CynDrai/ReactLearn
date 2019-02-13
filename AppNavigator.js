import { createStackNavigator, createAppContainer } from 'react-navigation';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';

const AppNavigator = createStackNavigator({
    FirstScreen: { screen: FirstScreen },
    SecondScreen: { screen: SecondScreen },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;