# React-Native webview integration

This example shows how to run the Vouched javascript plugin within a React Native application that is hosting a webview, in this case, the react-native-webiew component.

Note that you may also consider using the React Native SDK if you wish deeper integration within your React Native app, but the Vouched javascript plugin offers you a quick way to integrate and test Vouched ID verification within your React Native project.

## Getting Started

The example app is bare-bones react-native app, that has a webview configured as its main screen. By default, this example points to a Vouched demo page, which allows you to specify what configuration parameters you may wish to set, and run Vouched verification

**Note:** This example assumes you have a Vouched account, and have already installed the tools necessary to develop React-Native applications. If this is your first time implementing a React Native application, please read [how to set up your environment](https://reactnative.dev/docs/environment-setup) for the platform and mobile devices you plan to deploy to.

#### Download and configure the example

Using git, clone the repo and change directory to _vouched-rn-webview_. Then run yarn, to install the dependencies necessary to run

```shell
git clone https://github.com/vouched/vouched-rn-webview
cd vouched-rn-webview
yarn //installs dependencies
```

#### Running the examples

Since the Vouched plugin runs image detection using a camera and an AI framework, you will need to run the example on a real device, instead of a simulator. Here are some common ways to do that, using the command line of your computer

**Android**

Make sure your device is connected via USB to the development computer, and can been seen, by running `adb devices`, and verifying a device is listed. Then run `yarn android` which will build the Android application, and run it on the device. You will eventually be presented with a web page that allows you to configure and run the plugin

**iOS**

Make sure your device is connected via USB to the development computer. You will need to add the npm package *ios-deploy*, by running `npm install -g ios-deploy`.  Once installed, you can run the application by specifying the device name, ie `react-native run-ios --device "Jay's iPhone"` or by the device id, ie `react-native run-ios --udid 2412e2c450a14e23451699`. You will eventually be presented with a web page that allows you to configure and run the plugin



