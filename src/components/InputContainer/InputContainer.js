import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const inputContainer = (props) => (
    <View>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.placeInput}
            value={props.state.placeName}
            placeholder="An awesome place..."
            onChangeText={props.placeNameChangedHandler}
          />
          <Button 
            style={styles.placeButton}
            title="Add"
            onPress={props.placeSubmitHandler}
          />
        </View>
    </View>
);

const styles = StyleSheet.create({
    inputContainer: {
        width:'100%',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    placeInput: {
        width:"70%"
    },
    placeButton: {
        width:"30%"
    }
});

export default inputContainer;

