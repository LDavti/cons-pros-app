import * as React from 'react';
import './App.css';

function App() {
  const [list, setList] = React.useState<IAppState>({
    pros: [{index: 0, value: ""}],
    cons: [{index: 0, value: ""}],
  });

  const onChange = (part: Parts, value: string, index: number) => {
    let inputs: IElement[] = list[part];
    inputs[index].value = value;
    let filled = inputs.filter((el: IElement) => el.value !== "");
    setList({...list, [part]: [...filled, {index: index + 1, value: ""}]});
    if (inputs[inputs.length - 1].value) {
      setList({...list, [part]: [...inputs, {index: index + 1, value: ""}]});
    }
  }

// We can also create a reusable component for more complicated cases and pass each column as a props
  return (
    <div className="App">
      <div className="container main">
        <div className="header">
          <h2>Should I eat at McDonalds ? </h2>
        </div>
        <div className="content_wrapper">
          <div className="column">
            <h4>Pros</h4>
            <ul className="list">
              {list.pros.map((el: IElement, index: number) =>
                <li className="item">
                  <span className="number">{index + 1}</span>
                  <input
                    key={index}
                    value={el.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange("pros", e.target.value, index)}
                  />
                </li>)}
            </ul>
          </div>
          <div className="column">
            <h4>Cons</h4>
            <ul className="list">
              {list.cons.map((el: IElement, index: number) =>
                <li className="item">
                  <span className="number">{index + 1}</span>
                  <input
                    key={index}
                    value={el.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange("cons", e.target.value, index)}
                  />
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App