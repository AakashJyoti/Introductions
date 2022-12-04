import { ReactNode } from "react";

// Example for Generic type
interface IListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

// const List = <T extends {}>({ items, render }: IListProps<T>) => {
const List = <T,>({ items, render }: IListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};
export default List;
