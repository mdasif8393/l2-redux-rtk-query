import AddTaskModal from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import { ITask } from "@/types";

const Tasks = () => {
  const { data, isLoading } = useGetTasksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return (
    <div className="mx-auto max-w-7xl px-5 mt-10">
      <div className="flex justify-end items-center gap-5 mb-2">
        <h1 className="mr-auto">Tasks</h1>
        <Tabs defaultValue="all" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="high">High</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="low">Low</TabsTrigger>
          </TabsList>
        </Tabs>
        <AddTaskModal />
      </div>
      <div>
        {!isLoading &&
          data?.tasks.map((task: ITask) => (
            <TaskCard task={task} key={task.id} />
          ))}
      </div>
    </div>
  );
};

export default Tasks;
