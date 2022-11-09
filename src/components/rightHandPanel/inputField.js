import './inputField.css'
import ToggleSwitch from './toggleSwitch.js';
import { useContext, useRef } from 'react';
import { context } from '../../App';


const InputField = ({inputType, label, value, register4NewEntry, errors4NewEntry}) => {

    let ctx = useContext(context);
    
    switch (inputType) {
        case 'number':    
        return (<>
            <div className='number-input-container input-container'>
                <div className='labels'>{label}</div>
                <input type='number' defaultValue={value} {...register4NewEntry(label, { required: true })}/>
            </div>
            {errors4NewEntry[label] && <span style={{color:'red'}}>Please fill</span>}
        </>);

        case 'boolean':    
        return (
            <div className='bool-input-container input-container'>
                <div className='labels'>{label}</div>
                <ToggleSwitch label={label} boolVal={false} 
                register4NewEntry={register4NewEntry}/>
            </div>
        );

        case 'string':
            let strVal;
            for(const key in ctx.defaultValues){
                if(key===label){
                    strVal = ctx.defaultValues[key]
                    break
                }
            }
        return (<>
            <div className='string-input-container input-container'>
                <div className='labels'>{label}</div>
                <input type='text' defaultValue={strVal||value} {...register4NewEntry(label, { required: true })}/>
                {/* <div className='edit-btn' onClick={()=>{ctx.setOpenEditStringModal(true); ctx.setSelectedField(label)}}>Edit</div> */}
            </div>
            {errors4NewEntry[label] && <span style={{color:'red'}}>Please fill</span>}
        </>);

        case 'enum':
            let ddVal;
            for(const key in ctx.defaultValues){
                if(key===label){
                    ddVal=ctx.defaultValues[key]
                    break
                }
            }
        return (<>
            <div className='dropdown-input-container input-container'>
                <div className='labels'>{label}</div>
                {/* <input type='text' defaultValue={ddVal||""} {...register4NewEntry(label, { required: true })} readOnly/> */}
                <select defaultValue={ddVal|| ""} {...register4NewEntry(label, { required: true })}>
                    <option hidden value=''>select</option>
                    {value?.length>0 &&
                    value.map((item, ind)=>(<option key={ind} value={item}>{item}</option>))}
                </select>
                {/* <div className='edit-btn' onClick={()=>{ctx.setOpenEditDropDownModal(true); ctx.setSelectedField(label)}}>Edit</div> */}
            </div>
            {errors4NewEntry[label] && <span style={{color:'red'}}>Please fill</span>}
        </>);
    
        default:
            break;
    }
    
};

export default InputField;