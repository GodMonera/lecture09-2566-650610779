//define props using object destructuring
export const Task = ({ id, title, deleteFunc }) => {
  const deleteBtnOnClick = () => {
    deleteFunc(id);
  };
  return (
    <li className="my-1 ms-2">
      <span>{title}</span>
      <button className="btn btn-danger ms-1" onClick={deleteBtnOnClick}>
        Delete
      </button>
    </li>
  );
};
