# React_native_Udemy

## HelpFul React-Native Commands and etc. ##


* in android folder ./gradlew clean after react-native link 
* rm -rf ./ios/build to remove build folder in ios
* cfBundlerIdentifer error on iOS : run react-native-git-upgrade and then reset head back to head and reset simulator and react-native start --reset-cache
* Never do react-native link byitself without adding suffix of module
* ALso try to go manually approach for installing any module
* EPERm Error on Android: open android project folder in android studio and run Build/Clean or run  ./gradlew clean in the andorid folder after react-native link 
* react-native start --reset-cache
* Remote Redux Devtools open up your console then hit "Cmd+Ctrl+Arrow up
* yarn add remote-redux-devtools@0.5.0 --dev beacuse react-native 0.42 errors 500 (wait until update to react-native to update devtools)  and open devtools in a sepertae window from chrome. 
* RR to reload on windows and CTRL+m to open debug menu in windows or shake device
* Ctrl+R in oSX and Ctrl+D to open Debug Menu or shake device
* Go to File -> Project settings 2.Click the Advanced button 3.Select "Custom" and select "Relative to Workspace" in the pull down 4.Change "Build/Products" to "build/Build/Products"
* Inorder to copy paste text into android emulator: adb -s emulator-5554 shell input text 'text to paste'
* open console for remote debugg in windows not within chrome
* react-native run-ios --device "Jasan iPhone"  to run on real iphone or run using xcode directly
* git checkout -b rename-app and then react-native-rename "NewAppName" ( to rename app project)
* if performance is slow on android turn off dev-mode by launcging dev menu   
