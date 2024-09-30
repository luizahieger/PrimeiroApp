import React from 'react'
import { StyleSheet, View, Text, Pressable, Modal } from 'react-native'

const style = StyleSheet.create({

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

export default ModalConfirmacao = ({ isModalOpen, setIsModalOpen, handleFinalize, saldo, saldoPotencial }) => {

    return <Modal
        animationType="none"
        transparent={true}
        visible={isModalOpen}
        onRequestClose={() => {
            setIsModalOpen(!isModalOpen);
        }}>
        <View style={style.centeredView}>
            <View style={style.modalView}>
                <Pressable
                    style={style.buttonClose}
                    onPress={() => setIsModalOpen(!isModalOpen)}>
                    <Text style={style.textStyle}>x</Text>
                </Pressable>
                <Text style={style.modalText}>Tem certeza que quer realizar esta operação?</Text>
                <Text style={style.modalText}>Saldo Atual: R$ {saldo.toFixed(2)}</Text>
                <Text style={style.modalText}>Saldo Final: R$ {saldoPotencial.toFixed(2)}</Text>
                <Pressable
                    style={style.button}
                    onPress={() => handleFinalize()}>
                    <Text style={style.textStyle}>Confirmar transação</Text>
                </Pressable>
            </View>
        </View>
    </Modal>
}