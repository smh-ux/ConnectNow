import React from "react";
import {
    View,
    SafeAreaView,
    ScrollView,
    Text,
    Image,
    Dimensions,
    StyleSheet,
} from "react-native";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Navigation_Bot = () => {
    return(
        <View style={styles.navigation_bot}>
            <Image 
                source={require('./assets/home_icon.png')}
                style={styles.home_icon} 
            />
            <Image 
                source={require('./assets/search_icon.png')}
                style={styles.search_icon} 
            />

            <View  style={styles.plus_icon_container}>
                <Image 
                    source={require('./assets/plus_icon.png')}
                    style={styles.plus_icon}
                />
            </View>
                
            <Image 
                source={require('./assets/chat_icon.png')}
                style={styles.chat_icon}
                />
            <Image 
                source={require('./assets/profile_icon.png')}
                style={styles.profile_icon}
            />
        </View>
    );
}

const styles = StyleSheet.create ({
    navigation_bot: {
        width: WIDTH,
        height: 70,
        marginTop: (HEIGHT-94),
        backgroundColor: 'black',
        flexDirection: 'row',
        position: 'absolute',
    },

    home_icon: {
        width: 35,
        height: 35,
        tintColor: '#FFF',
        marginLeft: 15,
        marginTop: 20,
    },

    search_icon: {
        width: 30,
        height: 30,
        tintColor: '#FFF',
        marginLeft: 45,
        marginTop: 25,
    },

    plus_icon_container: {
        width: 70,
        height: 70,
        backgroundColor: '#000',
        borderRadius: 75,
        marginLeft: 35,
        marginTop: -5,
        borderColor: 'gray',
        borderWidth: 2
    },

    plus_icon: {
        width: 35,
        height: 35,
        tintColor: '#FFF',
        margin: 15.5,
    },

    chat_icon: {
        width: 35,
        height: 35,
        tintColor: '#FFF',
        marginLeft: 40,
        marginTop: 20,
    },

    profile_icon: {
        width: 30,
        height: 30,
        tintColor: '#FFF',
        marginLeft: 40,
        marginTop: 20,
    },

});

export default Navigation_Bot;