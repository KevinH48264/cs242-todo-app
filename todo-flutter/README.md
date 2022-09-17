## To-Do App with Flutter

## How to run
1. Git clone this repository
2. Ensure that flutter is installed on your device
3. Select the /lib/main.dart file
4. Use VSCode to download the Flutter Extension, select Chrome, and Run the app on the top right corner
5. If that doesn't work, navigate to your root directory in terminal and run 'flutter run -d chrome'
6. View the app in localhost!

## Reference
This app is taken and commented on a tutorial from: https://github.com/itzpradip/flutter-todo-app
The sections that are commented are primarily the lib folder because the other folders like ios, android, and web are generated from the flutter create command.

## Question
What are the significant software concepts that this combination of technologies has that each previous set of technologies did not? Or that they handle significantly differently?

Flutter enables easy deployment not only to web like vanilla javascript and node.js/mongoDB, but also to mobile devices like Android and iOS. Similarly to vanilla Javascript, Flutter primarily used a frontend state method to store the todo list while mongoDB used a backend database to store todo list items. Flutter also simplified the version of Javascript by having widgets that acted like components whereas Javascript and html had much more clustering and unnecessary words like div and headers -- requiring additional classnames to differentiate between them. Flutter also uses a similar structure of components in different files that we have also seen in vanilla Javascript/HTML/CSS. Ultimately, the key sfotware concept is that fltuter is used as a base code which can be deployed flexibly to multiple platforms including web, android, and iOS.
