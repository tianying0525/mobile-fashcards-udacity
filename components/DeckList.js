import React from 'react'
import { View, Text, FlatList, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import { getDecks } from '../utils/api'
import { white, blue, gray } from '../utils/colors'
import { AppLoading} from 'expo'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'

function Item({ navigation, title, numQuestions }) {
  // add onPress
  return (
    <View>
      <TouchableOpacity style={styles.deckTitleButton} onPress={() => navigation.navigate(
      'Deck',
      { title }
    )}>
        <Text style={styles.deckTitleText}>
          {title}
        </Text>
        <Text style={styles.numberText}>{numQuestions} Card(s)</Text>
      </TouchableOpacity> 
    </View>
  )
}

class DeckList extends React.Component {
  state = {
    ready: false
  }

  componentDidMount () {
    const { dispatch } = this.props
    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({ready: true})))
  }

  render() {
    const { ready } = this.state
    const { decks } = this.props
    if (ready === false) {
      return <AppLoading />
    }
    return (
        <View>
        { decks !== null
          ? <View>
              <FlatList
                keyExtractor={(item, index) => index.toString()} 
                data={Object.values(decks)}
                renderItem={({ item }) => 
                  <Item 
                  title={item.title} 
                  numQuestions={item.questions? item.questions.length : 0}
                  navigation={this.props.navigation}
                  />}
              />
            </View>
          : <View>
              <Text style={styles.noDecksText}>
                You didn't create any decks yet.
              </Text>
            </View>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckTitleButton: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 7,
    height: 70,
    marginTop: 5,
    marginLeft: 40,
    marginRight: 40,
    marginRight: 40
  },
  deckTitleText: {
    color: white,
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 10
  },
  numberText: {
    color: white,
    fontSize: 14,
    textAlign: 'center'
  },
  noDecksText: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20
  }
})

function mapStateToProps (decks) {
  return {
    decks
  }
}
export default connect(mapStateToProps)(DeckList)