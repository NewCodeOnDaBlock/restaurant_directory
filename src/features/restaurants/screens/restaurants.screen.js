import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { colors } from "../../../utils/colors";
import { RestaurantInfo } from "../components/restaurant.info.component";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer";

const StyledSearchBarContainer = styled(View)`
  padding: ${(props) => props.theme.sizes[1]};
`;

const StyledSearchBar = styled(Searchbar)`
  border-radius: ${(props) => props.theme.sizes[0]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  ${Platform.select({
    ios: `
      shadow-color: "${(props) => props.theme.colors.ui.tertiary}";
      shadow-offset: 5px 8px;
      shadow-opacity: 0.1;
      shadow-radius: 4px;
    `,
    android: `
      elevation: 4;
    `,
  })}
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = ({ list = {} }) => {
  const { count = 25 } = list;
  const cardArray = Array.from(
    { length: Math.floor(count) },
    (_, index) => index
  );

  return (
    <SafeArea>
      <StyledSearchBarContainer>
        <StyledSearchBar placeholder="Search" mode="bar" />
      </StyledSearchBarContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfo />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
