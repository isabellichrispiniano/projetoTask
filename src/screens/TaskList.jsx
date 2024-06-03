import React, { Component } from "react";
import { SafeAreaView, Text, ImageBackground, StyleSheet, View, FlatList, TouchableOpacity, Platform, Alert } from "react-native";

import todayImage from '../../assets/imgs/today.jpg'
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyle from "../commonStyle";
import Icon from 'react-native-vector-icons/FontAwesome';

import Task from "../components/Task";
import AddTask from './AddTask';

export default class TaskList extends Component  {

    render(){
     
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM')

    return (
        <SafeAreaView style={style.container} >
            <AddTask/>
            <ImageBackground source={todayImage} style={style.background} >
                <View style={style.titleBar} >
                    <Text style={style.title} >Hoje</Text>
                    <Text style={style.subTitle} >{today}</Text>
                </View>
            </ImageBackground>

            <View style={style.taskList} >
                <Task 
                  descricao="Comprar livro"
                  dataEstimada={new Date()}
                  concluidaEm={new Date()}
                />

                <Task
                  descricao="Ler livro"
                  dataEstimada={new Date()}
                  concluidaEm={null}
                />
                
            </View>
        </SafeAreaView>
    )}
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar:{
        flex:1,
        justifyContent:'flex-end'
    },
    title:{
        fontFamily: commonStyle.fontFamily,
        fontSize:50,
         color: commonStyle.colors.secundary,
         marginLeft:20,
         marginBottom:20
    },
    subTitle:{
        fontFamily: commonStyle.fontFamily,
        fontSize:20,
        color: commonStyle.colors.secundary,
        marginLeft:20,
        marginBottom:20
    }
})