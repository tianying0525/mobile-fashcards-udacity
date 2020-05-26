import React from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { purple, white } from '../utils/colors'
import {CommonActions} from '@react-navigation/native'
import { addDeck } from '../actions'
import { connect } from 'react-redux'
import BigButton from './BigButton'

class AddDeck extends React.Component {
  state = {
    title: ''
  }

  handleTitleChange = (title) => {
    this.setState(() => ({
      title
    }))
  }
  
  
  submit = () => {
    const title = this.state.title

    this.props.dispatch(addDeck(title))
  
    this.setState(() => ({ title: '' }))
  
    this.props.navigation.dispatch(
      CommonActions.goBack({
          key: 'Deck',
      }))
    

    saveDeckTitle(title)
   
  }

  render () {
    const title = this.state.title
    return (
      <View style={styles.container}>
        <Text style={styles.newTitleText}>
                New deck?
        </Text>
        <TextInput 
          style={styles.input}
          value={title}
          onChangeText={this.handleTitleChange}>
        </TextInput>
        <BigButton text='Submit' onPress={this.submit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginRight: 40
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center'
  },
  input: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  },
  newTitleText: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20
  }
})

export default connect()(AddDeck)