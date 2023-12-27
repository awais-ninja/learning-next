import Breadcrumbs from "./components/Breadcrumbs";

const layout = ({ children }) => {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
};

export default layout;
