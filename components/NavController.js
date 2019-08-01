import React from "react";
import { View } from "react-native";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
import MainNavigation from "../navigation/MainNavigation"

export default () => {
  const isLoggedIn = true
  const logIn = useLogIn();
  const logOut = useLogOut();
  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? (
        <MainNavigation />
      ) : (
        <AuthNavigation />
      )}
    </View>
  );
};