import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Switch,Button,TextInput } from "react-native";
import {submitSearch} from './SearchLogic'

export default function App() {

  const [searchObject, setSearchObject] = useState({isPerson:false,searchTerm:""});
  const handleChange = (name,value) => {
    setSearchObject(prevState => ({
        ...prevState,
        [name]: value
    }));
};
;
  return (
    <View style={styles.container}>
      <Switch onValueChange={(val) => handleChange("isPerson", val)} value={searchObject.isPerson} />
      <TextInput
        style={styles.inputt}
        value={searchObject.searchTerm}
        placeholder="Search Business or Person"
        onChangeText={(text) => handleChange("searchTerm",text)}
      />
      <Button style={styles.button} title="button" onPress={() => submitSearch(searchObject)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    marginTop:100,
  },
  inputt: {
    height: 40,
    margin: 12,
    width: "50%",
    borderWidth: 1,
    padding: 10,
  },
  button:{
    width:300,
    height:100,
  }
});
