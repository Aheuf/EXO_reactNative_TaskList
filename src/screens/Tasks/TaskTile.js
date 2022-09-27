import React from 'react'
import { Pressable, Image, StyleSheet, Text, View } from 'react-native'

export default function TaskTile({task, onUpdateTask, onDeleteTask}) {
    const onChangeStatus = () => {
        onUpdateTask(task.id)
    }

    const _onDeleteTask = () => {
        onDeleteTask(task.id)
    }

    return (
        <View style={styles.container}>
            <Pressable style={styles.subContainer} onPress={onChangeStatus}>
                <Image
                    style={styles.tinyLogo}
                    source={task.isCompleted ? require('../../../assets/icons/check_circle.png') : require('../../../assets/icons/circle.png')}
                />
                <Text style={styles.title}>{task.title}</Text>
            </Pressable>
            <Pressable onPress={_onDeleteTask}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/icons/delete.png')}
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        marginLeft:20,
        fontSize:16
    },
    container:{
        flexDirection:'row',
        alignItems:'center',
        padding:10,
        justifyContent: 'space-between'
    },
    subContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    tinyLogo:{
        width:26,
        height:26
    }
});