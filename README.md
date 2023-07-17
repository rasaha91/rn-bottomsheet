# rn-bottomsheet

This repo contains a minimal repro for hosting react native in a bottom sheet dialog within an existing android app. The branches in this repo corresponds to a major RN version (e.g. 0.68, 0.70, 0.71 and 0.72).

To test a branch (e.g 0.70), perform the following after launching an android emulator:

    git switch 0.70
    yarn install
    cd android
    gradlew :app:installDebug
    adb shell am start -n "com.rasaha91.rnbottomsheet/com.rasaha91.rnbottomsheet.MainActivity" -a android.intent.action.MAIN -c android.intent.category.LAUNCHER

Once the app is showing, start the dev server:

    cd ..
    yarn start

In the android app, press the "Show Dialog" button and observe the size of the bottom sheet dialog that shows.


