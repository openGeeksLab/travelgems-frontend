import React from "react";
import { DrawerNavigator } from "react-navigation";

import SideBar from "../components/sidebar";
import Home from "../containers/Home/Home";
import Page2 from "../containers/Page2/Page2";
import TabPage from "../containers/TabPage/TabPage";
import Webview from "../containers/Webview/Webview";

const MainDrawerRouter = DrawerNavigator(
  {
    Home: {screen: Home},
    Page2: {screen: Page2},
    TabPage: {screen: TabPage},
    Webview: {screen: Webview},
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

export default MainDrawerRouter;
