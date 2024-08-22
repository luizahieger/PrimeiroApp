import React from 'react'
import {View, Text, StyleSheet,FlatList} from 'react-native'


const styles = StyleSheet.create({
})

const style = function (){
    return({
        
    })
}

const tarefas= [
    {id:1,nome:"Organizar o quarto", feito:true},
    {id:2,nome:"Fazer a janta", feito:true},
    {id:3,nome:"Fazer atividades para amanhã", feito:true},
    {id:4,nome:"Dar comida para as cachorras", feito:true},
]

export default listaTarefas = function () {
    return <View>
        <FlatList
        data= {tarefas}
        renderItem={({item}) => <View> {item.nome} </View>}
        />
    </View>
}
