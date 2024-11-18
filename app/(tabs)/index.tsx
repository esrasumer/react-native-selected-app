import { View, StyleSheet } from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import React from "react";


export default function HomeScreen() {

  const [selected, setSelected] = React.useState([]);

  const data = [
    { key: '1', value: 'Mobiles', disabled: true },
    { key: '2', value: 'Grocery' },
    { key: '3', value: 'cameras' },
    { key: '4', value: 'Computers', disabled: true },
    { key: '5', value: 'Food' },
    { key: '6', value: 'Fashion' },
    { key: '7', value: 'Drinks' },
  ]

  return (
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <MultipleSelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        label="Categories"
        onSelect={() => console.log(selected)}
        save="value"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },

});
