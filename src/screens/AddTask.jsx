import React, {Component} from 'react';
import {Modal, View, StyleSheet, TouchableWithoutFeedback, Text, TouchableOpacity, TextInput, Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

import commonStyle from '../commonStyle';
import moment from 'moment';

const initialState = {desc: '', date: new Date(), showDatePicker: false }

export default class AddTask extends Component{
     render(){
        return(
           <Modal
            transparent={true}
            
           >
           </Modal>
        
         )}
}