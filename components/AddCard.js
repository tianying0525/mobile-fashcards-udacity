import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { addCard } from '../actions'
import { connect } from 'react-redux'
import { addCardToDeck } from '../utils/api'
import {CommonActions} from '@react-navigation/native'
import BigButton from './BigButton'

class AddCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }


  handleQuestionChange = (e) => {
    this.setState({
      question:e
    })
  }
  
  handleAnswerChange = (e) => {
    this.setState({
      answer : e
    })
  }
  
  submit = () => {
    
    const {title, decks } = this.props
    const card = this.state

    this.props.dispatch(addCard(title, card))
  
    this.setState(() => ({ question: '', answer: '' }))

    this.props.navigation.dispatch(
      CommonActions.goBack({
          key: 'AddCard',
      }))

    addCardToDeck(title, card, decks)
  
  }

  render () {
    const { question, answer } = this.state
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          value={question}
          onChangeText={this.handleQuestionChange}
          placeholder='Question'>
        </TextInput>
        <TextInput 
          style={styles.input}
          value={answer}
          onChangeText={this.handleAnswerChange}
          placeholder='Answer'>
        </TextInput>
        <BigButton text='Add Card' onPress={this.submit} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    alignItems: 'center',
    justifyContent: 'flex-start',
},
  input: {
    marginTop: 10,
    height: 40, 
    width: 200,
    borderColor: 'gray', 
    borderWidth: 1
  },
})


function mapStateToProps(decks, {route}) {
  const title = route.params.title
  return ({
          title,
          decks
      }
  )
}

export default connect(mapStateToProps)(AddCard)
