// here we are defining what the todo item object will look like when displayed

// import all packages necessary
import 'package:flutter/material.dart';

import '../model/todo.dart';
import '../constants/colors.dart';

class ToDoItem extends StatelessWidget { // this is the main todoitem class for each todo item that we have, specifically it defines what will be displayed on the UI
  final ToDo todo; // these are all classes and functions that are part of the ToDoItem
  final onToDoChanged;
  final onDeleteItem;

  const ToDoItem({ // defines what is required when a ToDoItem is instantiated
    Key? key,
    required this.todo,
    required this.onToDoChanged,
    required this.onDeleteItem,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) { // this is the actual widget of our todoItem that is displayed with the text and delete and container surrounding these items
    return Container(
      margin: EdgeInsets.only(bottom: 20), // CSS to create a margin on the bottom
      child: ListTile(
        onTap: () {
          // print('Clicked on Todo Item.');
          onToDoChanged(todo);
        },
        shape: RoundedRectangleBorder( // the shape of the container
          borderRadius: BorderRadius.circular(20),
        ),
        contentPadding: EdgeInsets.symmetric(horizontal: 20, vertical: 5),
        tileColor: Colors.white,
        leading: Icon( // show the icon of a checkbox
          todo.isDone ? Icons.check_box : Icons.check_box_outline_blank,
          color: tdBlue,
        ),
        title: Text( // text of our task
          todo.todoText!,
          style: TextStyle( // styling below
            fontSize: 16,
            color: tdBlack,
            decoration: todo.isDone ? TextDecoration.lineThrough : null,
          ),
        ),
        trailing: Container( // the delete item for our todo
          // identify all CSS of the delete item below
          padding: EdgeInsets.all(0),
          margin: EdgeInsets.symmetric(vertical: 12),
          height: 35,
          width: 35,
          decoration: BoxDecoration(
            color: tdRed,
            borderRadius: BorderRadius.circular(5),
          ),
          child: IconButton(
            color: Colors.white,
            iconSize: 18,
            icon: Icon(Icons.delete),
            onPressed: () {
              // print('Clicked on delete icon'); // <- debug statement
              onDeleteItem(todo.id); // activate function that the item is deleted when the button is pressed
            },
          ),
        ),
      ),
    );
  }
}
