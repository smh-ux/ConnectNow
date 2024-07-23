import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Image,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const [state, setState] = ('');

const Chat = ({ setScreen }) => {
    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{backgroundColor: 'grey'}}
        >
            {/* ALL TOP ITEMS*/}
            <View style={styles.container_top}>
                <View style={styles.top_top}>
                    <TouchableOpacity style={styles.back_button}
                    onPress={() => setScreen('Chats')}
                    >
                        <Text style={styles.back_button_text}>{'<'}</Text>
                    </TouchableOpacity> 

                    <View style={{ width: WIDTH-175, marginLeft: 50 }}>
                        <Text style={styles.username}>Mona Lisa</Text>
                    </View>
                </View>
                
                <View style={styles.online}>
                    <Text style={styles.online_text}>Online</Text>
                </View>

                <View style={styles.top_images_container}>
                    <View style={styles.top_images_background}>
                        <Image
                        style={styles.top_images}
                        source={require('./assets/chat_icon.png')}
                        />
                    </View>

                    <View style={styles.top_images_background}>
                        <Image 
                        style={styles.top_images}
                        source={require('./assets/phone_icon.png')}
                        />
                    </View>
                    
                    <View style={styles.top_images_background}>
                        <Image 
                        style={styles.top_images}
                        source={require('./assets/video_call_icon.png')}
                        />
                    </View>
                </View>
            </View>

            {/* ALL MESSAGES ITEMS */}
            <ScrollView style={styles.container_mid} showsVerticalScrollIndicator={false}>
                <Message_Friend />
                <Message_You />
                <Message_Friend />
                <Message_You />
                <Message_Friend />
                <Message_You />
                <Message_Friend />
                <Message_You />
                <Message_Friend />
                <Message_You />
                <Message_Friend />
                <Message_You />
            </ScrollView>

            {/* ALL BOT ITEMS */}
            <View style={styles.container_bot}>
                <ScrollView style={styles.bot_container_text}>
                    <View style={{ flexDirection: 'row', backgroundColor: 'transparent', borderRadius: 70, width: 300, height: 90, marginTop: 1}}>
                        <TextInput
                        multiline ={true}
                        numberOfLines={100}
                        style={styles.text_input}
                        placeholder="Send a message..."
                        onChangeText={setState}
                        value={state}
                        />

                        <Image
                        source={(require('./assets/send_icon.png'))}
                        style={styles.send_icon}
                        />                        
                    </View>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create ({

    //-----------TOP------------
    container_top: {
        width: WIDTH,
        height: 120,
        backgroundColor: 'grey',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },

    top_top: {
        width: WIDTH,
        flexDirection: 'row',
    },

    back_button: {
        width: 30,
        marginLeft: 10
    },

    back_button_text: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold'
    },

    username: {
        color: '#FFF',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center'
    },

    online: {
        marginTop: 5,
        width: WIDTH
    },

    online_text: {
        color: '#FFF',
        textAlign: 'center' 
    },

    top_images_container: {
        marginLeft: 100,
        marginTop: 10,
        flexDirection: 'row',
    },

    top_images_background: {
        width: 40,
        height: 40,
        backgroundColor: '#000',
        marginLeft: 20,
        borderRadius: 70,
    },

    top_images: {
        width: 20,
        height: 20,
        tintColor: '#FFF',
        borderColor: '#000',
        marginLeft: '25%',
        marginTop: '25%'
    },

    //------------------MID----------------
    container_mid: {
        width: WIDTH,
        height: HEIGHT-234,
        backgroundColor: '#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    mid_messages_friend: {
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 15
    },

    mid_message_image_friend: {
        width: 60,
        height: 60,
        borderRadius: 70,
    },

    mid_message_name_friend: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 15,
        marginTop: 2
    },

    mid_message_hour_friend: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 17,
        marginTop: 2,
        marginLeft: 10
    },

    mid_message_friend: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 17,
        marginTop: 5
    },

    //------------------

    mid_messages_you: {
        flexDirection: 'row',
        marginTop: 25,
        marginLeft: 15,
    },

    mid_message_image_you: {
        width: 60,
        height: 60,
        borderRadius: 70,
        marginLeft: 10
    },

    mid_message_name_you: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 175,
        marginTop: 2
    },

    mid_message_hour_you: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 17,
        marginTop: 2,
        marginLeft: 10,
    },

    mid_message_you: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 17,
        marginTop: 5,
        textAlign: 'right'
    },

    //-------------------BOTTOM-------------------
    container_bot: {
        width: WIDTH,
        height: 90,
        backgroundColor: '#000',
    },

    bot_container_text: {
        width: WIDTH,
        height: 100,
        backgroundColor: '#000',
        borderWidth: 1,
        borderRadius: 70,
        borderColor: 'rgba(255,255,255,0.5)',
    },

    send_icon: {
        width: 40,
        height: 40,
        marginTop: 20,
        marginLeft: 0,
        tintColor: 'grey',
    },

    text_input: {
        color: '#FFF',
        backgroundColor: '#000',
        height: 85,
        marginTop: 0,
        marginLeft: 1,
        width: WIDTH-50,
        borderRadius: 70
    }
});

const Message_Friend = () => {
    return(
        <SafeAreaView>
            {/* FRIENDS */}
            <View style={styles.mid_messages_friend}>
                <Image 
                source={require('./assets/image.jpg')}
                style={styles.mid_message_image_friend}
                />
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.mid_message_name_friend}>Mona Lisa</Text>
                        <Text style={styles.mid_message_hour_friend}>11:43 AM</Text>
                    </View> 
                    <View style={{ width: 290, marginLeft: 15}}>
                        <Text style={styles.mid_message_friend}>Hi, how are you doing today?</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const Message_You = () => {
    return(
        <SafeAreaView>
            {/* YOU */}
            <View style={styles.mid_messages_you}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row',}}>
                        <Text style={styles.mid_message_name_you}>You</Text>
                        <Text style={styles.mid_message_hour_you}>11:43 AM</Text>
                    </View>
                    <View style={{ width: 290, marginLeft: 0}}>
                        <Text style={styles.mid_message_you}>I'm great, how are you?</Text>
                    </View>
                </View>
                <Image 
                source={require('./assets/free-images.jpg')}
                style={styles.mid_message_image_you}
                />
            </View>
        </SafeAreaView>
    );
}

export default Chat;