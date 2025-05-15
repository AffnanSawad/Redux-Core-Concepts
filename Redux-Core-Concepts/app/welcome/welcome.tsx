
import { useDispatch, useSelector } from "react-redux";
import { decreament, increament } from "~/Redux/Features/Counters/CounterSlice";
import type { RootState } from "~/Redux/store";



export function Welcome() {

 
   
  //  Hooks
   const dispatch = useDispatch();
  
  //   + handler
   const handleIncreament = (amount : number) => {
      
    dispatch( increament(amount)  )

   }
 
  //  - handler
    const handledecreament = () => {
      
    dispatch( decreament()  )

   }


   const { counter } = useSelector( (state : RootState ) => state.counter )


  return (
          <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <button
         onClick={ ()=> handledecreament() }
        style={{
          fontSize: '24px',
          padding: '10px 20px',
          margin: '10px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        −
      </button>



        

      <button
         onClick={()=> {  handleIncreament(1) } }
        style={{
          fontSize: '24px',
          padding: '10px 20px',
          margin: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        +
      </button>


      <button
         onClick={()=> {  handleIncreament(5) } }
        style={{
          fontSize: '24px',
          padding: '10px 20px',
          margin: '10px',
          backgroundColor: '#4CAF20',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        + 5
      </button>


      
      

      <h1 className='text-4xl font-extrabold '> Total : {counter}  </h1>
    </div>
  );
}


