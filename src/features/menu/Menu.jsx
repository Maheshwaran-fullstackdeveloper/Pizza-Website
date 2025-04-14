import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <>
      <div className="flex bg-yellow-400 items-center justify-center mb-10 mt-10">
        <h1 className="text-3xl uppercase text-center font-semibold text-white p-2">
          Pizza mania
        </h1>
      </div>

      <ul className="divide-y divide-stone-200 px-2 mb-20 mt-10 ">
        {menu.map((pizza) => (
          <MenuItem key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
