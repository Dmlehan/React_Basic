  const Student= ()=>{
     return React.createElement("div",{},[
       React.createElement("h3",{},"Amal"), 
       React.createElement("h3",{},20), 
       React.createElement("h3",{},"Gampha"), 
     ]);
  };

  
//   const Student=()=>{
//      return React.createElement("div",{},[
//          React.createElement("h1",{},""),

//      ]);
//   };
  
  
  const App=()=>{
            // 1
            //////////////////////////////////////////////
             return React.createElement(
            //   2
                "div",
                {},
             ////////////////////////////////////////////////   
              [ 
                React.createElement("hi",{},"My react App"),
                // "This is  React App";
                React.createElement(Student)
              ]
              //////////////////////////////////////////////
               // 2?
             );
            // 1
             };

          const container=document.getElementById("root");
          const root=ReactDOM.createRoot(container);
          root.render(React.createElement(App));