import { Button, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Navbar = () => {
    const [isVisible, setVisible] = useState(false)
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

            <Modal
                visible={isVisible}
                animationType='fade'
                transparent={true}
                onRequestClose={() => {
                    setVisible(false)
                }}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Login Modal</Text>
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
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    modalContent: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(100, 100, 100, 0.2)',
    },
    modalText: {
        marginBottom: 15,
        fontSize: 18,
        color: '#000',
    },
    closeModal:{
        backgroundColor:'white',
        borderR
        
    },
    closeModalText:{
        textAlign:'center'
    }
})
