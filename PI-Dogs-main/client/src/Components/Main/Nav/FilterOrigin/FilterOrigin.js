import { useDispatch } from "react-redux";
import { filterByOrigin } from "../../../../Redux/Actions";

export default function FilterOrigin(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <select
        name="origin"
        id="origin"
        onChange={(e) => {
          dispatch(filterByOrigin(e.target.value));
          props.configPages('restart');
          }
        }
      >
        <option value="API">API</option>
        <option value="DB">DataBase</option>
      </select>
    </div>
  );
}