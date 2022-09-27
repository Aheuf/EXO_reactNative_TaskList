import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function Header() {
    const date = new Date();
    const days = ['Dimanche','Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    const month = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'decembre']
  return (
    <View style={styles.container}>
        <Text style={styles.date}>{`${days[date.getDay()]}, ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft:25,
        paddingTop:20
    },
    date: {
        fontSize:26,
        fontWeight:'bold'
    }
})