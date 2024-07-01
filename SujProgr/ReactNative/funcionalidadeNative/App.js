import "react-native-gesture-handler";
import React, { createElement } from "react";
import { NavigationContainer } from "@react-navigation/native"; // Importação do container que vai revestir as rotas
import { createDrawerNavigator } from "@react-navigation/drawer"; // Importação do drawer

const Drawer = createDrawerNavigator();

// Importação das páginas
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Sobre" component={Sobre} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
