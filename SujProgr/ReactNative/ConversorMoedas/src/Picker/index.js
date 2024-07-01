import React from "react";
import { Picker } from "@react-native-picker/picker";

export function PickerItem({ coins, selectedCoin, onChange }) {
  return (
    <Picker selectedValue={selectedCoin} onValueChange={onChange}>
      {coins.map((item, index) => {
        return (
          <Picker.item value={item.value} key={item.key} label={item.label} />
        );
      })}
    </Picker>
  );
}
