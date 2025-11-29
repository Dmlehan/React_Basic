  const Student= ()=>{
     return React.createElement("div",{},[
       React.createElement("h3",{},"Amal"), 
       React.createElement("h3",{},20), 
       React.createElement("h3",{},"Gampha"), 
     ]);
  };

  const StudentCard = () =>{
     return React.createElement(
          "div",{
            className:"st name"
          },
           React.createElement("img",
                  { src:"https://i.pinimg.com/1200x/2c/45/bd/2c45bdac6ce0841e6290276e2efd7da5.jpg",
                       alt:"Student-Image",
                    className:"studnet-image"
                  
                  }),
                       React.createElement(Student)
     );

  }
  
  const App=()=>{
             return React.createElement(
                "div",
                {},
              [ 
               React.createElement("hi",{},"My react App"),
               React.createElement(StudentCard),
               React.createElement(StudentCard)
               ]);
             };

          const container=document.getElementById("root");
          const root=ReactDOM.createRoot(container);
          root.render(React.createElement(App));