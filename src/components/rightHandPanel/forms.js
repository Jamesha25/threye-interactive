import './forms.css';
import InputField from './inputField';
import { useContext } from 'react';
import { context } from '../../App';


const Forms = () => {
    let ctx = useContext(context);
    

    const onError=(data)=>{
        console.log(data)
        
    }
    const makeEntry =(data)=>{
        console.log(data)
    }
    return (
        <div className='forms-container'>
            {   
                ctx.selectedActionItem &&
                <form onSubmit={ctx.handleSubmit4NewEntry((data)=>ctx.makeEntry(data, ctx.selectedActionItem.key), onError)}>
                    <div className='form-title'>{ctx.selectedActionItem.key} Form</div>
                    
                    {
                        ctx.selectedActionItem?.values?.length>0 &&
                        ctx.selectedActionItem?.values.map((item, ind)=>(
                            <InputField inputType={item.type} label={item.key} value={item.value} key={ind} 
                            register4NewEntry={ctx.register4NewEntry} errors4NewEntry={ctx.errors4NewEntry} onError={onError}/>
                        ))
                    }
                        <div className='button-container'>
                            <button type='submit'>Enter</button>
                            <button type='button' onClick={()=>ctx.reset()}>Cancel</button>
                        </div>
                                     
                </form>   
            }
        </div>
    );
};

export default Forms;