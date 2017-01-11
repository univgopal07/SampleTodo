# Sample Todo


Run the following command to create android or iOS app using cordova

Open Terminal/Shell prompt

run "Cordova Create APPNAME APPVIRTUALPATH APPNAMETODISPLAYINMOBILE
  (for example: cordova create Todo com.Basic.Todo TodoApp)

step into the appname folder
cd APPNAME

run "cordova platform add PLATFORMNAME"
  (for example: cordova platform add android OR cordova platform add iOS)
  
copy the content of www into the folder

update the config.xml

run "cordova prepare " command to copy the files into corresponding platform
run cordova build PLATFORMNAME or just cordova build to build the application

run "Cordova run android" by connecting to a android mobile will run the application in your device
or 
run "cordova emulate android" if android sdk is already installed in the machine will emulate an android mobile and open the applicaiton in emulator

Happy coding....
