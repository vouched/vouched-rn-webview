import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  //const appUrl = 'https://static.vouched.id/widget/demo/#/demo?recognizeIDThreshold=0.81&enableGeolocation=true&cardIDThreshold=0.2&generalThreshold=0.9&glareQualityThreshold=0.6&qualityThreshold=0.6&selfieThreshold=0&holdSteadyIntervalFace=1250&detectorRunFrameInterval=2&stepTitles%5BFrontId%5D=Upload%20ID&stepTitles%5BFace%5D=Upload%20Headshot&stepTitles%5BDone%5D=Finished&stepTitles%5BID_Captured%5D=ID%20Captured&stepTitles%5BFace_Captured%5D=Face%20Captured&stepTitles%5BStart%5D=Start&stepTitles%5BBackId%5D=ID%20%28Back%29&content%5BcrossDeviceShowOff%5D=true&showUploadFirst=true&showProgressBar=true&crossDeviceQRCode=false&crossDeviceHandoff=false&crossDevice=false&crossDeviceSMS=false&id=both&face=both&liveness=straight&enableEyeCheck=false&enableGeoLocation=false&debug=true&showFPS=false&sandbox=false&theme%5Bname%5D=verbose&theme%5Bfont%5D=Arial%2C%20Helvetica%2C%20sans-serif&theme%5BfontColor%5D=%23333&theme%5BiconLabelColor%5D=%23333&theme%5BbgColor%5D=%23FFF&theme%5BbaseColor%5D=%232E159F&theme%5BnavigationDisabledBackground%5D=rgba%28203%2C%20203%2C%20203%2C%200.15%29&theme%5BnavigationDisabledText%5D=%23888&theme%5BbaseColorLight%5D=rgb%28232%2C244%2C252%29&theme%5BprogressIndicatorTextColor%5D=%23000&type=idv&survey=true&includeBackId=false&includeBarcode=false&disableCssBaseline=false&showTermsAndPrivacy=false&maxRetriesBeforeNext=0&idShowNext=0&handoffView%5BonlyShowQRCode%5D=false&locale=en&userConfirmation%5BconfirmData%5D=false&userConfirmation%5BconfirmImages%5D=false&isStage=true&manualCaptureTimeout=35000';
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
