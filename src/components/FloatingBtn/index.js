import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';

export default function FloatingBtn({ toggle, isOpen }) {
  return (
    <Pressable style={styles.btn} onPress={toggle}>
        <Text style={styles.txt}>{isOpen ? 'x':'+'}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    btn: {
        position:'absolute',
        right:20,
        bottom:20,
        backgroundColor:'orange',
        justifyContent:'center',
        borderRadius:40,
        height:40,
        width:40
    },
    txt:{
        textAlign:'center',
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    }
});