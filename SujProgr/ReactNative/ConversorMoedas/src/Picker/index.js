import React from "react";
import { Picker } from "@react-native-picker/picker";

export function PickerItem({ coins, selectedCoin, onChange }) {
  let coinItem = coins.map((item, index) => {
    return <Picker.item value={item.key} key={index} label={item.key} />;
  });

  return (
    <Picker selectedValue={selectedCoin} onValueChange={onChange}>
      {coinItem}
    </Picker>
  );
}
