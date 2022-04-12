import {ChildAsFC} from './Child';

const Parent = () => {
  return (
      <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
        Hello World
      </ChildAsFC>
  );
};

export default Parent;
