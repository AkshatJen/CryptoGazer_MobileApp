# CryptoGazer
This is a Crypto Tracker App which not only lists the coins , news but also features with evaluated sentiment relating to those crypto currencies .

# Setup

## Prerequisites:

1. JDK8
2. NodeJS / NPM
3. Python
4. React Native CLI
5. Android Debug Bridge
6. Android SDK

## Steps:

1. Download the Project as a ZIP or open a terminal and use the command "git clone https://github.com/AkshatJen/CryptoGazer_MobileApp.git" in the
   directory you wish to clone the project into.

2. Open the project in an IDE of your choosing.

3. From the project's root directory, run 'npm install' to install the project's dependencies (Note: The root directory contains the package.json file).

### Android:

1. You must either have a running Android emulator or your own Android phone connected to your computer to run the app.

2. From the project's root directory, use the command 'react-native run-android', the CLI should begin the process of bundling the app and running it on any
   detected devices.

3. You may receive an error claiming that the Android SDK cannot be found, in which case you must navigate to the 'android' folder in the project directory,
   create a file called 'local.properties' and enter the variable that points to where you have the Android SDK saved on your computer.
   (Example: sdk.dir=C\:\\Users\\brian\\AppData\\Local\\Android\\Sdk, this should be the only line in the file)

4. If you receive an error saying the JDK cannot be found, try re-installing it from Oracle's website.

5. If all goes well you should see the app running on your device! (To enable hot-reloading during development shake your device and tap 'Enable Hot-Reloading')

### IOS:
