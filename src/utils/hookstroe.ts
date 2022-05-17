import React, { useEffect, useReducer } from 'react';


export function createStore(createState) {
  let state;
  const listener = [];
  const set = (val) => {
    // console.log('set', val);
    state = { ...state, ...val }
    listener.forEach(item => item())
  };
  const get = () => state;
  state = createState(set, get)
  return () => {
    const [, forceUpdate] = useReducer((c) => c + 1, 0)
    useEffect(() => {
      const index = listener.push(forceUpdate)
      return () => {
        listener.split(index - 1, 1, () => { })
      }
    }, [])
    return state
  }
}

// const useTest = createStore((set,get)=>({
//   number:0,
//   click:()=>{
//     const x = get().number
//     console.log(x);
//     set({number:x+1})
//   }
// }))

// function Test(){
//   const {click,number} = useTest();
//   return <div onClick={click}>{number}</div>
// }

// function App() {
//   const [data, setData] = useState(0);
//   return (
//     <div>
//       <Test />
//       <Test />
//     </div>
//   );
// }

// export default App;