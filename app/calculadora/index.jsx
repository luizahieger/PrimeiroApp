import React, {useState} from "react"
import {Text, View, TextInput, Button} from 'react-native'

const style = function (){
    return ({
        conteiner:{
            flex:1,
            justifyContent: 'center',
            alingItems: 'center',
        },
        input:{
            height: 40,
            margin: 12,
            borderWidht: 1,
            padding: 1
        }, 
        buttonStyle: {
            color: '#ffffff'
        },
        buttonContainer:{
            flexDirection:'row'
        }
        })
}

const Calculadora = function () {
    const [number1, onChangeNumber1] = useState('');
    const [number2, onChangeNumber2] = useState('');
    const [resultado, setResultado] = useState('')

    const soma = function (){
        setResultado(Number(number1)+Number(number2))
        onChangeNumber1("")
        onChangeNumber2("")
        return true
    }
   
    const diminui = function (){
        setResultado(Number(number1)-Number(number2))
        onChangeNumber1("")
        onChangeNumber2("")
        return true
    }
    
    const multiplica = function (){
        setResultado(Number(number1)*Number(number2))
        onChangeNumber1("")
        onChangeNumber2("")
        return true
    }
   
    const dividir = function (){
        setResultado(Number(number1)/Number(number2))
        onChangeNumber1("")
        onChangeNumber2("")
        return true
    }

    return <View style={style().conteiner}>
        <Text >Calculadora</Text>

        <TextInput
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="insira o número aqui"
        keyboardType= "numeric"
        style={style().input}
        />

         <TextInput
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="insira o segundo número aqui"
        keyboardType= "numeric"
        style={style().input}
        />
        
        <Button
        title="+"
        onPress={() => soma()}
        />

        <Button
        title="-"
        onPress={() => diminui()}
        />

        <Button
        title="X"
        onPress={() => multiplica()}
        />

        <Button
        title="/"
        onPress={() => divide()}
        />

        <Text>
            Resultado = {resultado}
        </Text>

        </View>

}

export default Calculadora;

