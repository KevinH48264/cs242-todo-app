// this defines the class and its properties

class ToDo { // this is the ToDo class with the most basic properties for todolist functions and identification
  String? id; 
  String? todoText;
  bool isDone;

  ToDo({ // these are the properties required when a ToDo is instantiated
    required this.id,
    required this.todoText,
    this.isDone = false,
  });

  static List<ToDo> todoList() { // this is the list that is returned upon instantiation
    return [
      ToDo(id: '01', todoText: 'Morning Excercise', isDone: true ),
      ToDo(id: '02', todoText: 'Buy Groceries', isDone: true ),
      ToDo(id: '03', todoText: 'Check Emails', ),
      ToDo(id: '04', todoText: 'Team Meeting', ),
      ToDo(id: '05', todoText: 'Work on mobile apps for 2 hour', ),
      ToDo(id: '06', todoText: 'Dinner with Jenny', ),
    ];
  }
}