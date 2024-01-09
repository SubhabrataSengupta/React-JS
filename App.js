    const parent=React.createElement("div", 
    {id:"parent"},
    [React.createElement("div", {id:"child"},
    [React.createElement("h1",{},"I am Boost"),
    React.createElement("h2",{},"I am Boost"),]),React.createElement("div", {id:"child"},
    [React.createElement("h1",{},"I am Boost"),
    React.createElement("h2",{},"I am Boost"),])]
    );
        const head=ReactDOM.createRoot(document.getElementById("head"))

        head.render(parent)