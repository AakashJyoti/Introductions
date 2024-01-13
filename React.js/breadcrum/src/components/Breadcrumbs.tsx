import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  let path = "";
  const pathArr = pathname.split("/").filter((x) => x);

  if (pathArr.length === 0) {
    return <div />;
  }

  return (
    <div className="px-6 py-1 border-b">
      <div className="flex gap-2">
        <Link to="/">Home</Link>
        {pathArr.map((name, index) => {
          path += `/${name}`;
          const isLast = index === pathArr.length - 1;
          return (
            <div key={name} className="flex gap-2 capitalize ">
              &gt;
              {isLast ? (
                <span>{Number(name) ? "Product Details" : name}</span>
              ) : (
                <Link to={path}>{name}</Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Breadcrumbs;
