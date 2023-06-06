import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  padding: 16px;
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://cdn.britannica.com/36/123536-050-95CB0C6E/Variety-fruits-vegetables.jpg",
    ],
    address = "100 some randonm food",
    isOpenNow = true,
    rating,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5} style={styles.card}>
      <RestaurantCardCover
        key={name}
        style={styles.cover}
        source={{ uri: photos[0] }}
      ></RestaurantCardCover>
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});
