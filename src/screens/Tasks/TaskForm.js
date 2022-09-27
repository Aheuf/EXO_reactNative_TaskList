import React, { useState } from 'react'
import { TextInput, StyleSheet, Button, View } from 'react-native'

export default function TaskForm({onAddTask}) {
    const [title, setTitle] = useState("");

    const onChangeText = (val) => {
        setTitle(val)
    }

    const onAddNewTask = () => {
        if(title !== ""){
            onAddTask(title);
            setTitle("")
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={title}
                placeholder='nouvelle tache'
            />
            <Button
                title='Ajouter'
                onPress={onAddNewTask}
                color='blue'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20,
        marginTop:10
    },
    input:{
        borderColor:'black',
        borderWidth:1,
        borderRadius:5,
        width:'70%',
        height:40
    }
});
