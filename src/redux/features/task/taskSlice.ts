import { RootState } from "@/redux/store";
import { ITask } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { removeUser } from "../user/userSlice";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: InitialState = {
  tasks: [
    {
      id: "sfs-sfs",
      isCompleted: false,
      title: "asffaf",
      description: "fafaffafaffa",
      priority: "medium",
      dueDate: "2025-02-23",
      assignedTo: null,
    },
  ],
  filter: "all",
};

type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignedTo"
>;

const createTask = (taskData: DraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
  };
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);

      state.tasks.push(taskData);
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "high" | "medium" | "low">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      state.tasks.forEach((task) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        task.assignedTo === action.payload ? (task.assignedTo = null) : task;
      });
    });
  },
});

export const selectTasks = (state: RootState) => {
  if (state.todo.filter === "low") {
    return state.todo.tasks.filter((task) => task.priority === "low");
  } else if (state.todo.filter === "medium") {
    return state.todo.tasks.filter((task) => task.priority === "medium");
  } else if (state.todo.filter === "high") {
    return state.todo.tasks.filter((task) => task.priority === "high");
  }
  return state.todo.tasks;
};
export const selectFilter = (state: RootState) => state.todo.filter;

export const { addTask, toggleCompleteState, deleteTask, updateFilter } =
  taskSlice.actions;

export default taskSlice.reducer;
