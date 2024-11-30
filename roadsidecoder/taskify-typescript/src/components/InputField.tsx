import React, { useRef } from "react";
import "./InputFiled.css";

interface Props {
  task: string;
  handleTask: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodos: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputField: React.FC<Props> = ({ task, handleTask, handleAddTodos }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          handleAddTodos(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          type="text"
          id=""
          placeholder="Enter a Task"
          value={task}
          onChange={(e) => handleTask((e.target as HTMLButtonElement).value)}
        />
        <button>Go</button>
      </form>
    </>
  );
};

export default InputField;
