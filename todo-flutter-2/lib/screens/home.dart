// this is the central file for all the components in the app
import 'package:flutter/material.dart';

import '../model/todo.dart';
import '../constants/colors.dart';
import '../widgets/todo_item.dart';

class Home extends StatefulWidget { // this allwos us to contain states of the app
  Home({Key? key}) : super(key: key);

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> { // this is what contains most of the app that we see
  final todosList = ToDo.todoList();
  List<ToDo> _foundToDo = [];
  final _todoController = TextEditingController(); // this controls the input field where the user can add new todo items

  @override
  void initState() { // this is for the search functionality, to see what todos we find -- fetched from todosList
    _foundToDo = todosList;
    super.initState();
  }

  @override
  Widget build(BuildContext context) { // this builds the main part of the app, essentially a container that is a widget
    return Scaffold(
      backgroundColor: tdBGColor,
      appBar: _buildAppBar(),
      body: Stack(
        children: [
          Container(
            padding: EdgeInsets.symmetric(
              horizontal: 20,
              vertical: 15,
            ),
            child: Column(
              children: [
                searchBox(),
                Expanded(
                  child: ListView( // this is going to display the body where all the todos will be shown
                    children: [
                      Container(
                        margin: EdgeInsets.only(
                          top: 50,
                          bottom: 20,
                        ),
                        child: Text(
                          'All ToDos',
                          style: TextStyle(
                            fontSize: 30,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ),
                      for (ToDo todoo in _foundToDo.reversed) // this iterates through all the todo items that we have found and creates the objects to display on the screen, reversed is to have the most recent item added be displayed to the top
                        ToDoItem( // render using the ToDo object that was instantiated above, as well as the functions
                          todo: todoo,
                          onToDoChanged: _handleToDoChange,
                          onDeleteItem: _deleteToDoItem,
                        ),
                    ],
                  ),
                )
              ],
            ),
          ),
          Align( // this new item will display at the bottom of the screen to let the user add new todo items
            alignment: Alignment.bottomCenter,
            child: Row(children: [
              Expanded(
                child: Container(
                  // most of the below are CSS to position and style the input field correctly
                  margin: EdgeInsets.only(
                    bottom: 20,
                    right: 20,
                    left: 20,
                  ),
                  padding: EdgeInsets.symmetric(
                    horizontal: 20,
                    vertical: 5,
                  ),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    boxShadow: const [
                      BoxShadow(
                        color: Colors.grey,
                        offset: Offset(0.0, 0.0),
                        blurRadius: 10.0,
                        spreadRadius: 0.0,
                      ),
                    ],
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: TextField( // this is the actual text field that the user can add text into
                    controller: _todoController,
                    decoration: InputDecoration(
                        hintText: 'Add a new todo item',
                        border: InputBorder.none),
                  ),
                ),
              ),
              Container( // this is for the plus button
                margin: EdgeInsets.only(
                  bottom: 20,
                  right: 20,
                ),
                child: ElevatedButton(
                  child: Text(
                    '+',
                    style: TextStyle(
                      fontSize: 40,
                    ),
                  ),
                  onPressed: () {
                    _addToDoItem(_todoController.text); // function to add the todo item
                  },
                  style: ElevatedButton.styleFrom(
                    primary: tdBlue,
                    minimumSize: Size(60, 60),
                    elevation: 10,
                  ),
                ),
              ),
            ]),
          ),
        ],
      ),
    );
  }

  void _handleToDoChange(ToDo todo) { // this updates the state of the todo to update it to whatever it isn't
    setState(() {
      todo.isDone = !todo.isDone;
    });
  }

  void _deleteToDoItem(String id) { // this is the function to delete the item from todosList
    setState(() {
      todosList.removeWhere((item) => item.id == id); // check if the item we're going through matches the item id
    });
  }

  void _addToDoItem(String toDo) { // this adds another todo item based on how we defined a ToDo class
    setState(() {
      todosList.add(ToDo(
        id: DateTime.now().millisecondsSinceEpoch.toString(),
        todoText: toDo,
      ));
    }); 
    _todoController.clear(); // clear the text field which the todoController is assigned to
  }

  void _runFilter(String enteredKeyword) { // this will filter todos to see if any contain the searched for word
    List<ToDo> results = [];
    if (enteredKeyword.isEmpty) {
      results = todosList;
    } else {
      results = todosList
          .where((item) => item.todoText!
              .toLowerCase()
              .contains(enteredKeyword.toLowerCase()))
          .toList();
    }

    setState(() { // update teh states of foundToDo based on results
      _foundToDo = results;
    });
  }

  Widget searchBox() { // all the code for the search bar widget is found here
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 15), // create padding for search bar
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
      ),
      child: TextField(
        onChanged: (value) => _runFilter(value),
        decoration: InputDecoration(
          contentPadding: EdgeInsets.all(0),
          prefixIcon: Icon( // this is to give the search icon
            Icons.search,
            color: tdBlack,
            size: 20,
          ),
          prefixIconConstraints: BoxConstraints(
            maxHeight: 20,
            minWidth: 25,
          ),
          border: InputBorder.none,
          hintText: 'Search',
          hintStyle: TextStyle(color: tdGrey),
        ),
      ),
    );
  }

  AppBar _buildAppBar() { // this builds the app bar on the top of the screen
    return AppBar(
      backgroundColor: tdBGColor,  // background color for app bar
      elevation: 0, // no shadow
      title: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
        // we're going to use a hamburger icon on the left
        Icon( 
          Icons.menu,
          color: tdBlack,
          size: 30,
        ),
        Container( // creating container for all objects inside the app bar (the top bar)
          height: 40,
          width: 40,
          child: ClipRRect(
            borderRadius: BorderRadius.circular(20),
            child: Image.asset('assets/images/avatar.jpeg'),
          ),
        ),
      ]),
    );
  }
}
