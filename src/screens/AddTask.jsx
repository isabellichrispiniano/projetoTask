import React, {Component} from "react";
import { Modal,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Text,
    TextInput,
    Platform,
    TouchableOpacity} from "react-native";
 
import DateTimePicker from '@react-native-community/datetimepicker'
import commonStyle from "../commonStyle";
import moment from "moment";
 
const initialState = { desc:'', date:new Date(), showDatePicker:false}
 
export default class AddTask extends Component{
 
         state = {
            ...initialState
         }
 
         save = () => {
            const newTask = {
                desc: this.state.desc,
                date:this.state.date
            }
            this.props.onSave && this.props.onSave(newTask)
            this.setState({... initialState})
         }
 
        getDatePicker = () => {
            let datePicker  = <DateTimePicker value={this.state.date}
            onChange={(_, date) => this.setState({date, showDatePicker:false})}
            mode='date'
            />
           
            const dateString = moment(this.state.date)
            .format('dddd, D [de] MMMM [de] YYYY')
           
            if (Platform.OS === 'android') {
                datePicker = (
                    <View>
                        <TouchableOpacity onPress={() => this.setState ({showDatePicker:true})}>
                            <Text style={style.date}>
                                {dateString}
                            </Text>
                            {this.state.showDatePicker && datePicker}
                        </TouchableOpacity>
                    </View>
                )
         }
            return datePicker
         }
 
                   
    render(){
        return(
            <Modal
            transparent={true}
            visible={this.props.isVisible}
            onRequestClose={this.onCancel}
            animationType="slide"
        >
            <TouchableWithoutFeedback onPress={this.props.onCancel}>
                <View style={style.background} ></View>
            </TouchableWithoutFeedback>
                <View style={style.container} >
                    <Text style={style.header} >Nova Tarefa</Text>
                    <TextInput
                    style={style.input}
                    onChangeText={desc => this.setState({ desc })}
                    placeholder="Informe a descrição"
                    value={this.state.desc}
                    />

                    {this.getDatePicker()}
 
                    <View style={style.button} >
                        <TouchableOpacity
                        onPress={this.props.onCancel}
                        >
                            <Text style={style.button} >Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.save}>
                            <Text style={style.button} >Salvar</Text>    
                        </TouchableOpacity>
                    </View>
                </View>
                    <TouchableWithoutFeedback onPress={this.props.onCancel}>
                        <View style={style.background} ></View>
                    </TouchableWithoutFeedback>
            </Modal>
        )
    }
}
 
const style = StyleSheet.create(
    {
        background:{
            flex:1,
            backgroundColor:"rgba(0,0,0,0.7)"
        },
        container:{
            backgroundColor:'#FFF'
        },
        header:{
            fontFamily:commonStyle.fontFamily,
            backgroundColor:commonStyle.colors.today,
            color: commonStyle.colors.secundary,
            textAlign:'center',
            padding:15,
            fontSize:18,
           
        },
        input:{
            fontFamily:commonStyle.fontFamily,
            height:40,
            margin:15,
            backgroundColor:'#FFF',
            borderWidth:1,
            borderColor:'#E3E3E3',  
            borderRadius:6,
        },
        buttons:{
            flexDirection:'row',
            justifyContent:'flex-end',
        },
        button:{
            margin:20,
            marginRight:30,
            color:commonStyle.colors.today,
        },
        date:{
            fontFamily:commonStyle.fontFamily,
            fontSize:20,
            marginLeft:15,
        },
    }
)