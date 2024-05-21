import React from 'react';
import './App.css';
// import ImportConponent from './R003_ImportConponent';
// import LifecycleEx from './R004_LifecycleEx';
// import LifecycleEx from './R005_LifecycleEx';
// import LifecycleEx from './R006_LifecycleEx';
// import LifecycleEx from './R007_LifecycleEx';
// import LifecycleEx from './R008_LifecycleEx';
// import Es6 from './R009_Es6'
// import Variable from './R010_Variable';
// import SpreadOperator from './R011_SpreadOperator'
// import ClassPrototype from './R012_Class&Prototype';
// import ArrowFunc from './R013_ArrowFunction';

// import ForEach from './R014_ForEach';
// import Map from './R015_Map';
// import Jquery from './R016_Jquery';
import Props from './R017_Props';
import PropsDatatype from './R018_PropsDatatype';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      {/* <p>HTML 적용하기</p> */}
      {/* <LifecycleEx */}
      {/*   prop_value='FromApp.js' */}
      {/* /> */}
      <p>CSS 적용하기</p>
      {/* <Variable /> */}
      {/* <SpreadOperator /> */}
      {/* <ClassPrototype /> */}
      {/* <ArrowFunc /> */}
      {/* <ForEach /> */}
      {/* <Map /> */}
      {/* <Jquery /> */}
      {/* <Props props_val="THIS IS PROPS" /> */}
      <PropsDatatype
        String="react"
        Number={200}
        Boolean={1 == 1}
        Array={[0, 1, 8]}
        ObjectJson={{ react: "react", twohundred: "200" }}
        Function={console.log("FunctionProps: function !")}
      />
    </div>
  );
}

export default App;
