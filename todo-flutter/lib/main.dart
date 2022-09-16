import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import './screens/home.dart';

void main() { // upon launch, run the MyApp() function which will display all our desired components
  runApp(const MyApp());
}

class MyApp extends StatelessWidget { // this is the largest overall container that fills the entire app screen and all the components that we will display to the user
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    SystemChrome.setSystemUIOverlayStyle( // color of background color of chrome is set to transparent
        SystemUiOverlayStyle(statusBarColor: Colors.transparent));
    return MaterialApp(
      debugShowCheckedModeBanner: false, // just for showing when it's in debug mode
      title: 'ToDo App',
      home: Home(),
    );
  }
}
