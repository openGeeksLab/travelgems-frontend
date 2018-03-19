import React from "react";
import { DrawerNavigator } from "react-navigation";

import SideBar from "../components/sidebar";
import Page2 from "../containers/Page2/Page2";
import Webview from "../containers/Webview/Webview";
import Activity from '../containers/Activity/Activity';
import Destination from '../containers/Destination/Destination';
import Smalltile from "../components/Smalltile/Smalltile";
import Tabview from "../components/Tabview/Tabview";
const MainDrawerRouter = DrawerNavigator(
  {
    Home: {screen: Tabview},
    Page2: {screen: Page2},
    Webview: {screen: Webview},
    Activity: {screen: Activity},
    Destination: {screen: Destination},
    Smalltile: {screen: Smalltile}
  },
  {
    initialRouteName: "Activity",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default MainDrawerRouter;
