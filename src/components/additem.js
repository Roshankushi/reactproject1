import React, {Component} from 'react';
import{Button,View,TextInput,StyleSheet,Text} from 'react-native';
import{db} from '../config';
let itemsRef =db.ref('/items');

let addItem =(item) =>{
    db.ref('/items').push({
        iteminfo:item
    });
}

export default class AddItem extends Component{
    constructor(props){
        super(props);
        this.state ={
            iteminfo:'',
            items:[]
        }
        this.clickToAdd =this.clickToAdd.bind(this);
        this.handlerChanger =this.handlerChanger.bind(this);
    }
clickToAdd(){
    addItem(this.state.iteminfo);
}

handlerChanger(e){
    this.setState({iteminfo:e.nativeEvent.text})
}

componentDidMount(){
    itemsRef.on('value',snapshot =>{
        let data = snapshot.val();
        let items=Object.values(data);
        this.setState({items});
     
    })
}

render(){
    return(
        <View>
            <TextInput 
            value={this.state.iteminfo} 
            style={styles.welcome} onChange={this.handlerChanger} placeholder="Name"></TextInput>
            <Button title="Add" onPress={this.clickToAdd}></Button>
            {this.state.items.map(x=>{return <Text>{x.iteminfo} </Text>})}
        </View>
    )
}
}

const styles = StyleSheet.create({
    welcome:{
        borderColor: 'black',
        borderWidth:1,
        width:250
    }
})