import React, { useState } from 'react'
import { View, StyleSheet, Pressable, Image, Modal, TextInput, Text } from 'react-native'
import BankButton from '../../components/bankButton.jsx'
import ModalConfirmacao from '../../components/modal'

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 35,
        alignItems: 'flex-start',
        margin: 40
    },
    saldoText: {
        fontSize: 18,
        alignItems: 'center',
        fontFamily: 'Arial',
        fontWeight: 'bold'

    },
    inputText: {
        fontSize: 14,
        alignItems: 'center',
        fontFamily: 'Arial',
        fontWeight: 'bold'
    },
    saldoNumber: {
        margin: 20,
        fontSize: 28,
    },
    input: {
        alignContent: 'center',
        margin: 20,
        backgroundColor: 'lightgray'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22
    },
    modalView: {
        backgroundColor: 'lightgray',
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 5,
        elevation: 2,
        backgroundColor: 'red'
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        borderRadius: 20,
        padding: 5,
        elevation: 2,
        alignSelf: 'flex-end',
        backgroundColor: 'lightgray'
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    }
})
export default App = function () {
    const logoIst = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDqauTZz_W6scTRBOiVbkdn-lGhKLHdyh8LA&s'
    const [saldo, setSaldo] = useState(7320.92)
    const [number1, onChangeNumber1] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [saldoPotencial, setSaldoPotencial] = useState(0)

    const handlePress = (type) => {
        handleCalculate(type)
        setIsModalOpen(true)
        return
    }
    const handleCalculate = (type) => {
        if (type == 'S') {
            let result = saldo - Number(number1)
            setSaldoPotencial(result - (result * 0.025))
            return
        }
        let result = saldo + Number(number1) + (Number(number1) * 0.01)
        setSaldoPotencial(result)
        return
    }
    const handleFinalize = () => {
        setSaldo(saldoPotencial)
        setIsModalOpen(!isModalOpen)
        return
    }


    return <View style={style.container}>
        <ModalConfirmacao
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            handleFinalize={handleFinalize}
            saldo={saldo}
            saldoPotencial={saldoPotencial}
        />
        <View style={style.container}>
            <Image
                style={style.logo}
                source={{
                    uri: logoIst,
                }}
            />
        </View>
        <View style={style.container}>
            <Text style={style.saldoText}>Saldo Atual na Conta:</Text>
            <View style={style.saldoNumber}>R$ {saldo.toFixed(2)}</View>
        </View>
        <View style={style.container}>
            <Text style={style.inputText}>Digite o valor abaixo e selecione a operação</Text>
            <TextInput
                onChangeText={onChangeNumber1}
                value={number1}
                placeholder="0,00"
                keyboardType="numeric"
                style={style.input}
            />
        </View>
        <View style={style.container}>
            <BankButton
                title="SACAR"
                onPress={() => handlePress('S')}
            />
            <BankButton
                title="DEPOSITAR"
                onPress={() => handlePress('D')}
            />
        </View>
    </View>
}