import create from "zustand";

const useBearStore = create((set) => ({
  todoList: [],
  addTodoList: (data) => set((state) => ({todoList: state.todoList.push(data)})),
  removeAllBears: () => set({ bears: 0 }),
}))

export default useBearStore;