import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert} from 'react-native'
import {db} from '../config'

let addregistration =(reg) =>{
  db.ref('/regs').push(reg)
}

export default class Registration extends Component {
constructor(props){
  super(props);
  this.state={
    regs:[],
    name:'',
    password:'',
    email:'',
    phone:''
  }
  this.signupChanger =this.signupChanger.bind(this);
  this.nameChanger =this.nameChanger.bind(this);
  this.passwordChanger =this.passwordChanger.bind(this);
  this.emailChanger =this.emailChanger.bind(this);
  this.phoneChanger =this.phoneChanger.bind(this);
}

signupChanger(e){
  addregistration(this.state);
}

passwordChanger(e){
  this.setState({
    password:e.nativeEvent.text
  })
}

emailChanger(e){
  this.setState({
    email:e.nativeEvent.text
  })
}

nameChanger(e){
  this.setState({
    name:e.nativeEvent.text
  })
}

phoneChanger(e){
  this.setState({
    phone:e.nativeEvent.text
  })
}

onClickListener = (viewId) => {
  Alert.alert("Alert", "Button pressed "+viewId);
}

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
        <TextInput style={styles.inputs}
            placeholder="Full name"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChange={this.nameChanger}/>
      </View>
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
        <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChange={this.passwordChanger}/>
      </View>

      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
        <TextInput style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChange={this.emailChanger}/>
      </View>
      
      <View style={styles.inputContainer}>
        <Image style={styles.inputIcon} source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAVFBMVEX///9eeJHr7vFie5Serb37/PyntcNmf5equMWGmq3u8fNrg5rm6u6Zqbl+kqf29/nT2uG9yNLO1t3H0Nnc4uexvcpxiJ6Mn7C/ytN3jaKVprff5eloHJrbAAAA9ElEQVRIidXVxxKDMAxFUYu4YErooeT//zMFTCgLPWWVaM2ZCx6PUOpPptBuLGXiSkTOCITx9BpJpnsLsrhoLzMZ8dcaaZkIJUMQVKGRdCUTSJpVwMfsPwQ85mIjKIbIfUuuEGl3BPqYTSUFDzkJ4GILTCjlFtKi4HPI8G1RKl6IxkkZvgXPGCfPTPJMTeLMevsFGSvPRCTP9PJM+UXG/2ym3WWSeABMHkyuMv1cuB1PknA5abkLwE6v6DA5vzr80fSsidzReHZ/NEdCY8IZezI3rmP6k2H3+tlkHFEm3wvoh9vcwuPOd3xjDtWx1raqwcf/cx6Hkwd4CDS7+AAAAABJRU5ErkJggg=='}}/>
        <TextInput style={styles.inputs}
            placeholder="Phone"
            underlineColorAndroid='transparent'
             onChange={this.phoneChanger}/>
      </View>
      

      <TouchableHighlight>
        <Button title="Sign up" style={styles.signUpText} onPress={this.signupChanger}  >Sign up</Button>
      </TouchableHighlight>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
