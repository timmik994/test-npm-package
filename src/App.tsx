import { RadioButton } from 'react-components-library-typescript/lib/components/radioButton/radioButton';
import { RadioGroup } from 'react-components-library-typescript/lib/components/radioButton/radioGroup';
import * as React from 'react';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <RadioGroup value="test" onChanged={(value: string) => alert(value)} >
          <RadioButton value="test" >test</RadioButton>
          <RadioButton value="test1">Test 1</RadioButton>
          <RadioButton value="other">Other value</RadioButton>
        </RadioGroup>
      </div>
    );
  }
}

export default App;
