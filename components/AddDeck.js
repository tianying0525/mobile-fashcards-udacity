// import React from 'react'
// import { connect } from 'react-redux'
// import { submitDeck } from '../utils/api'
// import uuidv1 from 'uuid/v1'
// import { addDeck } from '../actions'
// import { white,grey } from '../utils/colors'
// import {
//   Text,
//   StyleSheet,
//   TextInput,
//   KeyboardAvoidingView
// } from 'react-native'

// class AddDeck extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//           input: ""  
//         } 
//     }
//     // state = {
        
//     // };

//     handleInputChange = input => {
//         this.setState(() => ({
//             input
//         }));
//     };

//     handleSubmit = () => {
//         const { dispatch, navigation } = this.props
//         const id = uuidv1()
//         const title = this.state.title
//         const cards = []
//         const idx = 0
//         const score = 0
//         deck = { id, title, cards, idx, score }
//         dispatch(addDeck(deck))
//         submitDeck(deck)

//         // reset input
//         this.setState({
//             input: ""
//         });
//     }


//     render() {
//         const { input } = this.state;
//         return (
//             <KeyboardAvoidingView behavior="padding" style={styles.container}>
//                 <Text style={styles.label}>What will you learn in this deck?</Text>
//                 <TextInput
//                     style={styles.input}
//                     value={input}
//                     placeholder="e.g. Algebra"
//                     onChangeText={this.handleInputChange}
//                 />
//                 <StyledButton onPress={this.handleSubmit}>
//                     <Text>Create Deck</Text>
//                 </StyledButton>
//             </KeyboardAvoidingView>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center"
//     },
//     label: {
//       fontSize: 20,
//       fontWeight: "bold",
//       textAlign: "center"
//     },
//     input: {
//       backgroundColor: white,
//       width: 350,
//       fontSize: 20,
//       height: 50,
//       padding: 10,
//       borderRadius: 1,
//       borderColor: grey,
//       margin: 20
//     }  
//   });

// export default connect()(AddDeck)