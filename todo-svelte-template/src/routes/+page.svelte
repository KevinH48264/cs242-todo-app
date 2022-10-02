<script>
  // add all our imports
  import { initializeApp, getApps, getApp } from "firebase/app";
  import {
    getFirestore,
    collection,
    onSnapshot,
    doc,
    updateDoc,
    deleteDoc,
    addDoc,
  } from "firebase/firestore";
  import { firebaseConfig } from "$lib/firebaseConfig";
  import { browser } from "$app/environment";

  // initialize firebase only once
  const firebaseApp =
    browser &&
    (getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
  const db = browser && getFirestore(); // access firestore database

  // initialize our todos list
  let todos = [];

  // connect to our firebase database
  const colRef = browser && collection(db, "todos"); // find the document of todos
  const unsubscribe =
    browser &&
    onSnapshot(colRef, (querySnapshot) => {
      let fbTodos = [];
      querySnapshot.forEach((doc) => {
        let todo = { ...doc.data(), id: doc.id };
        fbTodos = [todo, ...fbTodos];
      });
      todos = fbTodos;
    });
  console.log({ firebaseApp, db });

  // initialize our task and error when we try to add tasks
  let task = "";
  let error = "";

  // add tasks function below to our firebase database
  const addTodo = async () => {
    let todo = {
      task: task,
      isComplete: false,
      createdAt: new Date(),
    };
    if (task !== "") {
      const docRef = await addDoc(collection(db, "todos"), {
        task: task,
        isComplete: false,
        createdAt: new Date(),
      });

      error = "";
    } else {
      error = "Task is empty";
      console.log(error);
    }

    task = "";
  };

  // update the current todo by toggling their isComplete status
  const markTodoAsComplete = async (item) => {
    await updateDoc(doc(db, "todos", item.id), {
      isComplete: !item.isComplete,
    });
  };

  // delete the todo selected from our firebase database
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };
</script>

<!-- this is the add a task input field where the user types and adds a todo item -->
<input type="text" placeholder="Add a task" bind:value={task} />
<button on:click={addTodo} class="addBtn"> Add </button>

<!-- this is for our list of todo items -->
<ul>
  {#each todos as item}
    <li class:complete={item.isComplete}>
      <span>
        {item.task}
      </span>
      <span>
        <button on:click={() => markTodoAsComplete(item)}>✔</button>
        <button on:click={() => deleteTodo(item.id)}>❌</button>
      </span>
    </li>
  {/each}
</ul>

<!-- this is the styling when a todo is marked complete -->
<style>
  .complete {
    text-decoration: line-through;
  }
</style>
