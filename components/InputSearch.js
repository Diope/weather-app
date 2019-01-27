import React, { Component } from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

export default class InputSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
    this.handleChangeText = this.handleChangeText.bind(this)
    this.handleSubmitEditing = this.handleSubmitEditing.bind(this)
  }

  handleChangeText(text) {
    this.setState({text})
  }

  handleSubmitEditing()  {
    const {onSubmit} = this.props;
    const {text} = this.state;

    if (!text) return;

    onSubmit(text);
    this.setState({text: ''});
  }

  render() {
    const {placeholder} = this.props;
    const {text} = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          value={text}
          placeholder={placeholder}
          placeholderTextColor="white"
          style={styles.textInput}
          clearButtonMode="always"
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0)',
    height: 32,
    width: 300,
    marginTop: 20,
    marginHorizontal: 32,
    paddingHorizontal: 2,
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginBottom: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
    fontSize: 16
  }
})
