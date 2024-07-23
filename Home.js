import React, { useState } from "react";
import { 
    SafeAreaView,
    Text,
    TouchableOpacity,
    Button 
} from 'react-native';

import Navigation_Bot from "./Navigation_Bot"; 

const Home = ({ setScreen }) => {
    return(
        <SafeAreaView>
            <Text>Home Screen</Text>
            <Button title="Profile" onPress={() => setScreen('Profile')} />

            <Navigation_Bot />
        </SafeAreaView>
    );
}

export default Home;