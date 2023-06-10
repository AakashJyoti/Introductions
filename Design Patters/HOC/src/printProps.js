export const printProps = (Component) => {
  console.log(Component);
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
};
