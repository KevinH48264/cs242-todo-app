<script>
  // import necessary packages for displaying, adding, and tracking tasks
  import { TasksCollection } from '../api/TasksCollection';
  import Task from './Task.svelte';
  import TaskForm from './TaskForm.svelte';
  import { useTracker } from 'meteor/rdb:svelte-meteor-data';

  let hideCompleted = false;
    
//   Function for hiding and revealing completed tasks
  const setHideCompleted = value =>  {
      hideCompleted = value;
  }

// Filter by completed
  const hideCompletedFilter = { isChecked: { $ne: true } };
 
// $: marks reactive statements according to the tutorial

// all to create a function that retries data from the TasksCollection database
  $: tasks = useTracker(() => TasksCollection.find(hideCompleted ? hideCompletedFilter : {}, { sort: { createdAt: -1 } }).fetch());
  $: incompleteCount = useTracker(() =>TasksCollection.find(hideCompletedFilter).count());

//  Create a title based on the amount of incompleted tasks
  $: pendingTasksTitle = `${
          incompleteCount ? ` (${$incompleteCount} tasks left)` : ''
  }`;
  
</script>


<div class="app">
    <header>
        <div class="app-bar">
            <div class="app-header">
                <!-- Add tasks left variable -->
                <h1>📝️ To Do List {pendingTasksTitle}</h1>
            </div>
        </div>
    </header>

    <div class="main">
      <TaskForm />
        <div class="filter">
            <!-- Call hideCompleted function -->
            <button on:click={() => setHideCompleted(!hideCompleted)}>
                {hideCompleted ? 'Show All' : 'Hide Completed'}
            </button>
        </div>

        <ul class="tasks">
            <!-- Display tasks using the Task component -->
            {#each $tasks as task (task._id)}
                <Task task={task} />
            {/each}
        </ul>
    </div>
</div>