import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Image
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Chats = ({ setScreen }) => {
    return(
        <SafeAreaView>
            <View style={styles.all_container}>
                <View style={styles.top}>                    
                    <TouchableOpacity style={styles.back_button}
                    onPress={() => setScreen('Home')}
                    >
                        <Text style={styles.back_button_text}>{'<'}</Text>
                    </TouchableOpacity>
                    
                    <View style={{ width: WIDTH-50 }}>
                        <Text style={{ color: '#FFF', fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop: 20}}>
                            ChatNow
                        </Text>
                    </View>
                </View>

                <View style={styles.chats_container}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <People />
                        <People />
                        <People />
                        <People />
                        <People />
                        <People />
                        <People />
                        <People />
                        <People />
                        <People />
                        <People />
                        <People />
                        <People />
                        <People />
                        <People />
                        <People />
                        <People />
                        <People />
                        <People />
                        <People />
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create ({
    all_container: {
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: '#000',
    },

    top: {
        width: WIDTH,
        height: 100,
        backgroundColor: 'black',
        flexDirection: 'row'
    },

    back_button: {
        width: 30,
        height: 50,
        backgroundColor: 'transparent',
        marginTop: 20
    },
    
    back_button_text: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    },

    chats_container: {
        width: WIDTH,
        height: HEIGHT-69,
        backgroundColor: '#000',
    },

    people: {
        width: WIDTH,
        height: 100,
        backgroundColor: 'transparent',
        borderRadius: 0,
        borderWidth: 1,
        borderBottomColor: 'rgba(255, 255, 255, 1)',
    },

    people_inside: {
        marginTop: 10,
        flexDirection: 'row'
    },

    people_image: {
        width: 75,
        height: 75,
        borderRadius: 70,
        marginLeft: 5,
    },

    people_name: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 15,
        marginTop: 10
    },

    people_content: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 17,
        marginTop: 5
    },
});

const People = () => {
    return(
        <View style={styles.people}>
            <View style={styles.people_inside}>
                <Image 
                source={require('./assets/image.jpg')}
                style={styles.people_image}
                />
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.people_name}>Mona Lisa</Text>
                    </View> 
                    <View style={{ width: 290, marginLeft: 15}}>
                        <Text style={styles.people_content}>Hi, how are you doing today?</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}

export default Chats;