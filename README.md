## Requirements
- [Node](https://nodejs.org) `6.x` or newer
- [React Native](http://facebook.github.io/react-native/docs/getting-started.html) for development
- [Xcode](https://developer.apple.com/xcode/) for iOS development
- [Android Studio](https://developer.android.com/studio/index.html) for Android development
- [Android SDK](https://developer.android.com/sdk/) `23.0.1` or newer for Android development
- [Genymotion](https://www.genymotion.com/) for Android emulation (Optional)
- [Android Marshmallow](https://www.android.com/versions/marshmallow-6-0/) or newer on your Android device to test properly


# React Native Installation
- Install nvm(for macOs or Linux) or nvm for windows
- Install latest version of node on nvm and use it.
    ```sh
    nvm install node

    nvm list

    nvm use <VERSION>
    ```
- Install Xcode for iOS
- Install JDK
- Install Android Studio and create a device
- Dont forget to set ANDROID_HOME environment variable to SDK versions
- (Optional but suggested) Install yarn
- Install react-native-cli
    ```sh
    npm install -g react-native-cli
    ```
- Install watchman
    ```sh
    brew install watchman
    ```



See [Getting Started](https://facebook.github.io/react-native/docs/getting-started.html) to install requirement tools.


## Libraries
- [NativeBase](https://nativebase.io/)
- [Navigation for React Native](https://reactnavigation.org/)
- [Redux](http://rackt.github.io/redux/index.html) `3.7.x` a predictable state container for Javascript apps
- [Redux Modal](https://github.com/yesmeck/redux-modal)
- [Babel](http://babeljs.io/) `6.x.x` for ES6+ support
- [React-Native-Elements] (https://github.com/react-native-training/react-native-elements)
- [React-Native-Config](https://github.com/luggit/react-native-config)

## HOW DO I INSTALL A LIBRARY?
- ```sh
npm install --save <package_name>```
- ```npm link <package_name>```
To install all the packages included in package.json file simple run:
- ```npm install```
- ```npm link```


## DEVELOPERS TOOLS
- [Reactroton](https://github.com/infinitered/reactotron)
- [React Developer Tools]
  ```
    npm install -g react-devtools
    react-devtools
  ```
- [Redux devtools] (https://github.com/zalmoxisus/redux-devtools-extension)

- [Reading Time] https://facebook.github.io/react-native/docs/debugging.html

## First Clone Installation
- npm install
- react-native link

## Commands
- create a new app : react-native init <project_name>
- run on ios simulator : react-native run-ios
- run on android simulator or device: react-native run-android
- open android emulator (Mac): ```/Users/<user>/Library/Android/sdk/tools/emulator -avd <emulator_name (e.g. Nexus_5X_API_24)> -port 5554```

## Reading Materials
- [Learn ES2015] https://babeljs.io/learn-es2015/
- [React-Native] http://facebook.github.io/react-native/docs/tutorial.html
- [Component Lifecycle] https://gist.github.com/TyrealGray/9c78a67383dd36711077ddeb4cc4608a, https://reactjs.org/docs/react-component.html
- [Libraries] http://www.awesome-react-native.com/
- [Awesome React Native] http://www.awesome-react-native.com/

## Common Issues
- Android run "Device not found":
  ```
    chmod 755 android/gradlew
  ```
- Clean Install project
  ```
  rm -rf ios/build
  rm -rf android/build
  watchman watch-del-all
  rm -rf node_modules && npm install
  rm -fr $TMPDIR/react-*
  react-native link
  ```
