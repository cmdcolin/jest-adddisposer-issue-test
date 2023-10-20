import { addDisposer, types } from "mobx-state-tree";

const model = types
  .model({
    a: 1,
    b: 2,
  })
  .actions((self) => ({
    afterCreate() {
      console.log("create");
      addDisposer(self, () => {
        console.log("destroy"); // never called
      });
    },
  }));

export default function App() {
  const m = model.create();
  return <div>Hello world</div>;
}
