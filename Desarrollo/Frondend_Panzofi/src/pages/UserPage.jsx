import {useForm} from 'react-hook-form'
import {createTasks} from '../api/task.api'
import { useState } from 'react';

export function Usuario(){

      const[counter1, setcounter1] = useState(0);
      const[counter2, setcounter2] = useState(0);

      const ContButtom1 = () =>{
        setcounter1(counter1 + 1);
        console.log('count1 ',counter1);
      }
      const ContButtom2 = () =>{
            setcounter2(counter2 + 1);
            console.log('count2 ', counter2);
      }

        const {register, handleSubmit} = useForm();

        const onSubmit = handleSubmit( async data => {
            const res = await  createTasks(data);
            console.log(res);
        })

        


    return(
        <>
          <div >
          <form onSubmit={onSubmit}>
              <input type ="text" placeholder="title" {...register("title", {required : true})}/>
              <br/>
              <textarea rows="3" placeholder="descripció" {...register("description", {required : true})}/>
              <button>save</button>
             
          </form>
                <button onClick={ContButtom1}>count1</button>
                <button onClick={ContButtom2}>count2</button>
          </div>
        </>
     )
}