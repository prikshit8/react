const Component = ({ name, age }) => {
  return (
    <div>
      <h1>my name is {name}</h1>
      <h2>my age is {age}</h2>
    </div>
  );
};

const withLoading = (Component) => {
  return function WithLoadinComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <div>Loading....</div>;
    } else {
      <Component {...props} />;
    }
  };
};


function WithLoadinComponent({ isLoading, ...props }) {
  if (isLoading) {
    return <div>Loading....</div>;
  } else {
    <Component {...props} />; /// name, age
  }
}

const NewComponent = withLoading(Component);
