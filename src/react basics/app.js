// const headingJS = document.createElement('h1');
// heading.innerHTML= 'hello world from js!';


const rootDom = document.getElementById('root');
// const headingReact = React.createElement("h1",{},"Hello world from react");
// const headingReact = <h1>hello world from react jsx</h1>;

const Heading = () => {
  return <h1>hello world from react component</h1>;
};

const root = ReactDOM.createRoot(rootDom);
root.render(<Heading />);
// root.render(Heading());
// React Element is a js Object

// console.log(headingJS);
// console.log(headingReact);

// root.appendChild(heading);