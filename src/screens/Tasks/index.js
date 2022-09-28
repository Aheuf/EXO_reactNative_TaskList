import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../../components/Counter'
import FloatingBtn from '../../components/FloatingBtn'
import Header from '../../components/Header'
import TaskForm from './TaskForm'
import TaskTile from './TaskTile'
import { getTasks } from '../../redux/selectors'
import { deleteTask, toggleTask } from '../../redux/actions'

export default function TaksScreen() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const tasks = useSelector(getTasks);
    const dispatch = useDispatch();

    const renderItem = ({item}) => {
        return <TaskTile task={item} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask}/>
    }

    const onDeleteTask = (id) => {
        dispatch(deleteTask(id));
    }

    const onUpdateTask = (id) => {
        dispatch(toggleTask(id));
    }

    const _toggleForm = () => {
        setIsFormVisible(!isFormVisible)
    }

  return (
    <>
        <FlatList
            ListHeaderComponent={
                <>
                    <Header/>
                    {isFormVisible && <TaskForm/>}
                    <View style={styles.containerCounters}>
                        <Counter nb={tasks.length} title='taches crées'/>
                        <Counter nb={tasks.filter(t => t.isCompleted === true).length} title='taches effectuées'/>
                    </View>
                </>
            }
            contentContainerStyle={{flexGrow:1}}
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
        />
        <FloatingBtn toggle={_toggleForm} isOpen={isFormVisible}/>
    </>
  )
}

const styles = StyleSheet.create({
    containerCounters: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        paddingHorizontal:20
    }
});