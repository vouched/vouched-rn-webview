import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const appUrl = 'https://static.vouched.id/widget/demo/#/'
  const requestCameraPermission = async () => {
    try { 
		  const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
  	  ]);
  	} catch (err) {
      console.warn(err);
    }
  };

  return (
    <WebView
      source={{ uri: appUrl }}
      style={{ marginTop: 20 }}
      geolocationEnabled={true}
      mediaPlaybackRequiresUserAction={false}
      javaScriptEnabled={true}
     />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
