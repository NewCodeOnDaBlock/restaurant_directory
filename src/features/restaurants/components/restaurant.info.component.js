import React from "react";
import {
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const StyledRestaurantName = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.sizes[2]};
`;

const StyledRestaurantContent = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors.ui.secondary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.sizes[1]};
`;

const StyledAddressContent = styled(Text)`
  font-family: ${(props) => props.theme.fonts.monospace};
  color: ${(props) => props.theme.colors.ui.secondary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.sizes[1]};
`;

const StyledCardContainer = styled(View)`
  flex-direction: row;
`;

const StyledRestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  border-radius: ${(props) => props.theme.sizes[0]};
`;

const StyledRestaurantCover = styled(Card.Cover)`
  border-radius: ${(props) => props.theme.sizes[0]};
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RatingAndOpenNowContainer = styled(View)`
  height: 30px;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const StyledClosedText = styled(Text)`
  font-family: ${(props) => props.theme.fonts.monospace};
  color: ${(props) => props.theme.colors.text.error};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.sizes[1]};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "U-Grill",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1466220549276-aef9ce186540?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    address = "100 Random Street. Sin City, Ca 99289",
    isOpenNow = true,
    rating = 5,
  } = restaurant;

  const ratingArray = Array.from(
    { length: Math.floor(rating) },
    (_, index) => index
  );

  const cardArray = Array.from(
    { length: Math.floor(rating) },
    (_, index) => index
  );

  return (
    <>
      <StyledRestaurantCard elevation={5}>
        <StyledRestaurantCover source={{ uri: photos[0] }} />
        <Card.Content>
          <StyledRestaurantName>{name}</StyledRestaurantName>
          <StyledCardContainer>
            <RatingAndOpenNowContainer>
              <Rating>
                {ratingArray.map((i) => (
                  <SvgXml key={i} xml={star} width={20} height={20} />
                ))}
              </Rating>
              {isOpenNow ? (
                <StyledRestaurantContent>
                  <SvgXml xml={open} width={30} height={30} />
                </StyledRestaurantContent>
              ) : (
                <View
                  style={{
                    width: 100,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <StyledClosedText>CLOSED NOW</StyledClosedText>
                  <Image
                    style={{ width: 25, height: 25 }}
                    source={{ uri: icon }}
                  />
                </View>
              )}
            </RatingAndOpenNowContainer>
          </StyledCardContainer>
          <StyledAddressContent>{address}</StyledAddressContent>
        </Card.Content>
      </StyledRestaurantCard>
    </>
  );
};
