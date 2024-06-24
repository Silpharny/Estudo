import React, { createElement } from "react";
import { NavigationContainer } from "@react-navigation/native"; // Importação do container que vai revestir as rotas
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons"; // Importando os icones

// Importação das páginas
import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";

const Tab = createBottomTabNavigator(); // variavel para dar referencia ao tabBar

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {" "}
        {/* Criar uma ativar a tabBar */}
        <Tab.Screen // Criar rota de navegação
          name="Home" // Dar o nome para rota
          component={Home} // Referenciar a página da rota
          options={{
            // Estilizar navBar
            // Adicionando icone a tabBar
            tabBarIcon: ({ color, size }) => {
              return (
                <Feather
                  name="home"
                  color={color}
                  size={size} // Criando uma função anônima que vai receber o color e size padrão do icone, ele vai retornar um icone
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="help-circle" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
