import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ImageBackground, Image, Modal, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Link } from 'expo-router'

export default PokemonScreen = () => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const [opponentPokemon, setOpponentPokemon] = useState('');
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [pokemonImg, setPokemonImg] = useState('')
  const [opponentImg, setOpponentImg] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type')
      .then(response => response.json())
      .then(data => setTypes(data.results))
      .catch(error => console.error('Error fetching Pokémon types:', error));
    fetch(`https://pokeapi.co/api/v2/pokemon?limit:1000`)
      .then(response => response.json())
      .then(data => setAllPokemons(data.results))
      .catch(error => console.error('Error fetching Pokémon by type:', error));

  }, []);

  useEffect(() => {
    if (selectedType) {
      fetch(`https://pokeapi.co/api/v2/type/${selectedType}`)
        .then(response => response.json())
        .then(data => setPokemons(data.pokemon))
        .catch(error => console.error('Error fetching Pokémon by type:', error));
    }
  }, [selectedType]);

  useEffect(() => {
    if (selectedPokemon) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`)
        .then(response => response.json())
        .then(data => setPokemonImg(data.sprites))
        .catch(error => console.error('Error fetching Pokémon by type:', error));
    }
  }, [selectedPokemon]);

  useEffect(() => {
    if (opponentPokemon) {
      fetch(opponentPokemon.url)
        .then(response => response.json())
        .then(data => setOpponentImg(data.sprites.front_default))
        .catch(error => console.error('Error fetching Pokémon by type:', error));
    }
  }, [opponentPokemon]);

  const handleBattle = () => {
    const randomIndex = Math.floor(Math.random() * allPokemons.length);
    setOpponentPokemon(allPokemons[randomIndex]);
    setIsModalOpen(true)
  };
  return (
    <SafeAreaView >
      <ImageBackground
        source={{ uri: 'https://preview.redd.it/pok%C3%A9mon-starting-screen-mockup-aseprite-490x270-mouse-v0-3y9gp6yxiita1.png?width=1080&crop=smart&auto=webp&s=1d9c3aa0e6f57ad9a25e01ce19a7b8e35ccb8bf4' }}
        style={styles.bgImage}
      >
        <View style={styles.container}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedType}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedType(itemValue)}
            >
              <Picker.Item label="Selecione um Tipo" value="" />
              {types.map((type, index) => (
                <Picker.Item key={index} label={type.name} value={type.name} />
              ))}
            </Picker>
            <Picker
              selectedValue={selectedPokemon}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedPokemon(itemValue)}
            >
              <Picker.Item label="Selecione um Pokémon" value="" />
              {pokemons.map((pokemon, index) => (
                <Picker.Item key={index} label={pokemon.pokemon.name} value={pokemon.pokemon.name} />
              ))}
            </Picker>
          </View>
          {selectedPokemon ? <Button onPress={handleBattle} title='batalhar'></Button> : null}
          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalOpen}
            onRequestClose={() => {
              setIsModalOpen(!isModalOpen);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <ImageBackground
                source={{ uri: 'https://art.pixilart.com/3d21237dd0410ba.png' }}
                style={styles.bgImage}>
                  <Image
                    style={styles.image2}
                    source={{ uri: opponentImg }} />
                  <Image
                    style={styles.image}
                    source={{ uri: pokemonImg.back_default }} />
                  <Text style={styles.modalText}>{selectedPokemon} vai bate de frente com {opponentPokemon.name}</Text>
                </ImageBackground>
              </View>
            </View>
          </Modal>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  picker: {
    width: 200,
    height: 50,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
  bgImage: {
    height: '100%',
    width:'100%',
    borderRadius:20
  },
  pickerContainer: {
    marginTop: 300
  },
  image: {
    width: 150,
    height: 150,
    alignSelf:'flex-start',
    marginTop:30
  },
  image2: {
    width: 150,
    height: 150,
    alignSelf:'flex-end',
    marginTop:160

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    flex:1,
    margin: 20,
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:'80%'
  },
  modalText:{
    alignSelf:'center',
    marginTop:30,
    fontSize:15,
    fontWeight:'bold'
  }
});