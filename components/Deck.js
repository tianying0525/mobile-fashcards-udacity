import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {removeDeck} from "../actions"
import {removeTitle} from '../utils/api'
import { white, blue, gray } from '../utils/colors'



class Deck extends React.Component {
  setTitle = (title) => {
    if (!title) return

    this.props.navigation.setOptions({
        title 
    })
  }

  delete = () => {
    const {remove, goBack, title, decks } = this.props
    remove()
    goBack()
    removeTitle(title, decks)
  }

  render() {
    const {title, decks} = this.props
    this.setTitle(title)
    var numQuestions = 0
    if (decks[title] && decks[title].questions) numQuestions = decks[title].questions.length  
    return (
      <View>
        <Text style={styles.deckTitleText}>{title} Deck</Text>
        <Text style={styles.deckCardText}>{numQuestions} card(s)</Text>
        <TouchableOpacity style={styles.deckTitleButton} onPress={() => this.props.navigation.navigate(
          'AddCard',
          { title }
          )}>
            <Text style={styles.deckButtonText}>
              Add Card
            </Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.deckTitleButton} onPress={() => this.props.navigation.navigate(
          'Quiz',
          { title }
          )}>
            <Text style={styles.deckButtonText}>
              Start Quiz
            </Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.deckTitleButton} onPress={this.delete}>
            <Text style={styles.deckButtonText}>
            Delete Deck
            </Text>
        </TouchableOpacity> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckTitleButton: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 17,
  },
  deckTitleText: {
    color: blue,
    fontSize: 26,
    textAlign: 'center'
  },
  deckButtonText: {
    color: white,
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10
  },
  deckCardText: {
    color: gray,
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 20
  }
})

function mapStateToProps(decks, {route}) {
  const title = route.params.title
  return ({
          title,
          decks
      }
  )
}

function mapDispatchToProps(dispatch, {route, navigation}) {
  const title = route.params.title
  return {
      remove: () => dispatch(removeDeck(title)),
      goBack: () => navigation.goBack()
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Deck)