import React from "react";
import { View, Text, StyleSheet, TouchablewhithoutFeedback } from 'react-native';

import commonStyle from "../commonStyle";
import Icon from 'react-native-vector-icons/FontAwesome';

import moment from "moment";
import 'moment/locale/pt-br'



export default props => {
    const tarefaNaoConcluida = props.concluidaEm != null ?
        { textDecorationLine: 'line-through' } : {}

    const date = props.concluidaEm ? props.concluidaEm : props.dataEstimada

    const dateFormat = moment(date).locale('pt-br')
        .format('ddd, D [de] MMMM')


    return (
        <View style={style.container} >

                < View style={style.checkContainer} >
                    {getCheckView(props.concluidaEm)}
                </View>
            

            <View>
                <Text style={[style.descricao, tarefaNaoConcluida]} >{props.descricao}</Text>
                <Text style={style.date} >{dateFormat}</Text>
            </View>
        </View>
    )
}

function getCheckView(concluidaEm) {
    if (concluidaEm != null) {
        return (
            <View style={style.dataEstimada} >
                <Icon name='check' size={20} color='#FFF' />
            </View>
        )
    } else {
        return (
            <View style={style.pendente} >

            </View>
        )
    }
}

const style = StyleSheet.create(
    {
        container: {
            flexDirection: 'row',
            borderColor: '#2c2c2c',
            borderBottomWidth: 1,
            alignItems: 'center',
            paddingVertical: 10,
        },
        pendente: {
            height: 25,
            width: 25,
            borderRadius: 13,
            borderWidth: 1,
            borderColor: '#555',
        },
        dataEstimada: {
            height: 25,
            width: 25,
            borderRadius: 13,
            borderWidth: 1,
            backgroundColor: '#4D7031',
            alignItems: "center",
            justifyContent: "center",
        },
        descricao: {
            fontSize: 15,
            color: commonStyle.colors.mainText,
        },
        date: {
            fontFamily: commonStyle.fontFamily,
            color: commonStyle.colors.subText,
            fontSize: 12,
        },
        checkContainer: {
            width: '20%',
            alignItems: 'center',
            justifyContent: 'center',
        },
    }
)