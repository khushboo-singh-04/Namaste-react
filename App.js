// const heading = React.createElement("h1", {id:"heading", xyz:"abc"} , "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


const heading = React.createElement("div", {id:"parent"} , [
    React.createElement("div", {id:"child"} ,
    [   React.createElement("h1", {} ,"Hello World from React! h1"),
        React.createElement("h2", {} ,"Hello World from React! h2")]),
    React.createElement("div", {id:"child2"} ,
    [   React.createElement("h1", {} ,"Hello World from React! h1"),
        React.createElement("h2", {} ,"Hello World from React! h2")])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);