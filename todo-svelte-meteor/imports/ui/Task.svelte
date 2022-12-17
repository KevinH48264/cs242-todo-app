<script>
  import { TasksCollection } from '../api/TasksCollection';

  export let task;

  const toggleChecked = () => {
    // Toggle isChecked property
    TasksCollection.update(task._id, {
      $set: { isChecked: !task.isChecked }
    });
  };

  // Delete task by removing it from collection by id
   const deleteThisTask = () => {
        TasksCollection.remove(task._id);
    };
</script>

<!-- HTML display and actual styling of a task -->
<li style="align-items: center">
    <input
        type="checkbox"
        readonly
        checked={!!task.isChecked}
        on:click={toggleChecked}
    />
    <span style="margin-left: 8px">{ task.text }</span>
    <button class="delete" on:click={deleteThisTask}>&times;</button>
</li>
