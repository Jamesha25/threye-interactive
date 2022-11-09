import "./modal.css";
import ModalLayout from "./modalLayout";
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { context } from '../../App';


function Modal({ setOpenModal, modalTitle, errorMessege, label }) {
  let ctx = useContext(context);
  const { register: register4String, handleSubmit: handleSubmit4String, formState: { errors:errors4String } } = useForm();
  const { register: register4DropDown, handleSubmit: handleSubmit4DropDown, formState: { errors:errors4DropDown } } = useForm();
  

  const onError = (data) =>{
    console.log(data)
  }

  switch (modalTitle) {

    case 'editString':
      let strVal;
      for(const key in ctx.defaultValues){
        if(key===label){
          strVal = ctx.defaultValues[key]
          break
        }
      }
      return (
        <ModalLayout setOpenModal={setOpenModal}>
          <div className="title">
            <h1>{label}</h1>
          </div>
          <form onSubmit={handleSubmit4String(ctx.handleEnterContentIntoInputField)}>
            <div className="fields">
              <input type='text' defaultValue={strVal} placeholder="Enter The Value" {...register4String(label, { required: true })}/>
            </div>
            {errors4String[label] && <span>Please fill the text box</span>}
            <div className="footer">
              <button onClick={() => {setOpenModal(false)}} id="cancelBtn">Cancel</button>
              <button type='submit'>Save</button>
            </div>
          </form> 
        </ModalLayout>  
      );
    
      case 'editDropDown':
        let ddVal;
        for(const key in ctx.defaultValues){
          if(key===label){
            ddVal=ctx.defaultValues[key]
            break
          }
        }
        let optionValues;
        for(const item of ctx.selectedActionItem.values){
          if(item.key===label && item.type==='enum'){
            optionValues = item.value
            break
          }
        }
        return (
          <ModalLayout setOpenModal={setOpenModal}>
            <div className="title">
              <h1>{label}</h1>
            </div>
            <form onSubmit={handleSubmit4DropDown(ctx.handleEnterContentIntoInputField, onError)}>
              <div className="fields">
                {/* <input type='text' placeholder="Enter The Value" {...register4DropDown(label, { required: true })}/> */}
                <select {...register4DropDown(label, { required: true })} defaultValue={ddVal||""}>
                  <option value='' hidden>select</option>
                  {optionValues?.length>0 &&
                  optionValues.map((item, ind)=>(<option key={ind} value={item}>{item}</option>))}
                </select>
              </div>
              {errors4DropDown[label] && <span>Please select the value</span>}
              <div className="footer">
                <button onClick={() => {setOpenModal(false)}} id="cancelBtn">Cancel</button>
                <button type='submit'>Save</button>
              </div>
            </form> 
          </ModalLayout>  
        );
    
    case 'loader':
      return (
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="title">
              <h1>Loading.....</h1>
            </div>
          </div>
        </div>  
      );
    
    case 'error':
      return (
        <ModalLayout setOpenModal={setOpenModal}>
          <div className="title">
            <h1>{errorMessege}</h1>
          </div>
        </ModalLayout>  
      );
    

    default:
    break;
  }
}

export default Modal;