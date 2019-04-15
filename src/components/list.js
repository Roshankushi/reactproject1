import React, {Component} from 'react';
import{View,ItemComponent,StyleSheet} from 'react-native';
import{db} from '../config';


let itemsRef =db.ref('items');

export default class List extends Component{
    constructor(props){
        super(props);
        this.state ={
            iteminfo:'',
            items:[]
        }

    }
componentDidMount(){
    itemsRef.on('Value',snapshot =>{
        let data = snapshot.val();
        let items=Object.values(data);
        this.setState({items});
     
    })
}

render(){
    return(
        <View> {this.state.items.length > 0 ?(
            <ItemComponent items={this.state.items}/>
        ) :( <Text>No Items</Text>)}
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