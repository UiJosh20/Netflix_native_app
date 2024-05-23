import { Button, Image, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Navbar = () => {
    const [isVisible, setVisible] = useState(false)
    const [changeThemeIcon, setChangeThemeIcon] = useState(require('../assets/lightSunny.png'))

    const lightIcon = require('../assets/lightSunny.png')
    const darkIcon = require('../assets/sunny.png')

    const theme =()=>{
        if(changeThemeIcon === lightIcon){
            setChangeThemeIcon(darkIcon)
        }
        else{
            setChangeThemeIcon(lightIcon)
        }

    }

    return (
        <View style={styles.disp}>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Home</Text>
            </Pressable>
            <Pressable style={styles.button}>
                <Text style={styles.text}>Recently watched</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => setVisible(true)}>
                <Text style={styles.text}>login</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={theme}>
            <Image source={changeThemeIcon} style={styles.icon} />
            </Pressable>

            <Modal
                visible={isVisible}
                animationType='fade'
                transparent={true}
                onRequestClose={() => {
                    setVisible(false)
                }}
            >
                <View style={styles.modalBackground}>
                    <View >
                        <View style={styles.modalContent}>
                        <Text style={styles.modalText}> This page is under contruction</Text>
                        </View>
                        <Pressable  onPress={() => setVisible(false)} style={styles.closeModal}>
                            <Text style={styles.closeModalText}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Navbar

const styles = StyleSheet.create({
    disp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#121212',
        padding: 10,
    },
    button: {
        padding: 5,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalText: {
        marginBottom: 15,
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 300,
        color: 'rgba(194, 188, 188, 0.99)',
    },
    closeModal:{
        position: 'absolute',
        bottom: -350,
        left:140,
        backgroundColor: 'rgba(155, 4, 4, 0.99)',
        padding: 20,
        borderRadius: 100,
       
    },
    closeModalText:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold'
       
    }
})
