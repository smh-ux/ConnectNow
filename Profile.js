import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    ScrollView,
    Text,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    TouchableHighlight,
    Button,
} from 'react-native';

import Navigation_Bot from "./Navigation_Bot";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const Profile = ({ setScreen }) => {
    return(
        <SafeAreaView>

            {/*BIG IMAGE*/}
            <Image 
            source={require('./assets/image.jpg')}
            style={styles.big_image}
            />
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

            {/*SLIDE CONTAINER*/}
            <View style={styles.inside_container}>

                {/*PROFILE PICTURE AND NAME*/}
                <View style={styles.profile_head}>
                    <Image 
                    source={require('./assets/image.jpg')}
                    style={styles.image}
                    />
                    <View style={{ 
                    flexDirection: 'column',
                    marginLeft: 15,
                    marginTop: 5
                    }}>
                        <Text style={styles.header}>Mona Lisa</Text>
                        <Text style={styles.sub_header}>Italy, Roma</Text>
                    </View>
                </View>

                {/*DATAS*/}
                <View style={styles.datas}>
                    <View style={styles.datas_sub}>
                        <Text style={styles.datas_type}>30</Text>
                        <Text style={styles.datas_type}>Updates</Text>
                    </View>
                    <View style={styles.datas_sub}>
                        <Text style={styles.datas_type}>80</Text>
                        <Text style={styles.datas_type}>Fans</Text>
                    </View>
                    <View style={styles.datas_sub}>
                        <Text style={styles.datas_type}>150</Text>
                        <Text style={styles.datas_type}>Connected</Text>
                    </View>
                </View>
                
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.button_style}
                    onPress={() => setScreen('Chat')}
                    >
                        <Text style={styles.button_text}>Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_style}>
                        <Text style={styles.button_text}>Connect</Text>
                    </TouchableOpacity>
                </View>

                {/*MEMORIES*/}
                <View style={styles.memories_container}>
                    <View flexDirection='row'>
                        <Text style={styles.memories_text}>Memories</Text>
                        <TouchableOpacity style={{width: 30, marginLeft: 250}}>
                            <Text style={styles.memories_text_button}>{">"}</Text>
                        </TouchableOpacity>                        
                    </View>

                    <View style={styles.memories_image_container} flexDirection='row'>
                        <Image 
                        source={require('./assets/image.jpg')}
                        style={styles.memories_image}
                        />
                        <Image 
                        source={require('./assets/image.jpg')}
                        style={styles.memories_image}
                        />
                    </View>
                </View>

                {/*CLIPS*/}
                <View style={styles.clips_container}>
                    <View flexDirection='row'>
                        <Text style={styles.clips_text}>Clips</Text>
                        <TouchableOpacity style={{width: 30, marginLeft: 296}}>
                            <Text style={styles.clips_text_button}>{">"}</Text>
                        </TouchableOpacity>                        
                    </View>

                    <View style={styles.clips_image_container} flexDirection='row'>
                        <Image 
                        source={require('./assets/image.jpg')}
                        style={styles.clips_image}
                        />
                        <Image 
                        source={require('./assets/image.jpg')}
                        style={styles.clips_image}
                        />
                    </View>
                </View>
                
            </View>
        </ScrollView>
        <Navigation_Bot />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create ({
    container: {
        width: WIDTH,
        height: (HEIGHT),
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },

    big_image: {
        width: WIDTH,
        height: HEIGHT,
        position: 'absolute'
    },

    inside_container: {
        width: WIDTH,
        height: HEIGHT+15,
        backgroundColor: '#000',
        marginTop: 500-94,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },

    profile_head: {
        marginLeft: 25,
        marginTop: 35,
        flexDirection: 'row',
    },

    image: {
        width: 85,
        height: 85,
        borderRadius: 70,
    },

    header: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30
    },

    sub_header: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
    },

    datas: {
        flexDirection: 'row',
    },

    datas_sub: {
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 47,
        marginTop: 25,
    },

    datas_type: {
        color: '#FFF',
        fontSize: 20,
    },

    buttons: {
        flexDirection: 'row',
    },

    button_style: {
        width: 150,
        height: 40,
        backgroundColor: 'gray',
        borderRadius: 30,
        marginLeft: 35,
        marginTop: 30
    },

    button_text: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: '3%',
    },

    memories_container: {
        width: WIDTH,
        height: 200,
        marginTop: 30,
    },

    memories_text: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 5
    },

    memories_text_button: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    memories_image_container: {
        marginLeft: 2
    },

    memories_image: {
        width: 180,
        height: 155,
        marginLeft: 10,
        marginTop: 10,
    },

    clips_container: {
        width: WIDTH,
        height: 200,
        marginTop: 15,
    },

    clips_text: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 5
    },

    clips_text_button: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    clips_image_container: {
        marginLeft: 2
    },

    clips_image: {
        width: 180,
        height: 155,
        marginLeft: 10,
        marginTop: 10,
    }
});

export default Profile;