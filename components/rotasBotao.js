import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/stack';

import Home from '../components/home';
import Dica1 from '../components/dica01';
import Dica2 from '../components/dica02';

const Stack = createNativeStackNavigator();

export default function RotasBotao() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Dica1" component={Dica1}/>
                <Stack.Screen name="Dica2" component={Dica2}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}