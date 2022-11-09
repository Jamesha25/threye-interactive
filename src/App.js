import ContentArea from './components/contentArea/contentArea';
import RightHandPanel from './components/rightHandPanel/rightHandPanel';
import BottomBar from './components/bottomBar/bottomBar';
import './App.css';
import Modal from './utils/modal/modal';
import React, { useState } from 'react';
import { INPUT } from './input';
import { useForm } from "react-hook-form";

export const context = React.createContext();
function App() {
  const [openEditStringModal, setOpenEditStringModal] = useState(false);
  const [openEditDropDownModal, setOpenEditDropDownModal] = useState(false);
  const [selectedActionItem, setSelectedActionItem] = useState();
  const [selectedField, setSelectedField] = useState();
  const [defaultValues, setDefaultValues] = useState();
  const [result, setResult] = useState([])

  const { register: register4NewEntry, handleSubmit: handleSubmit4NewEntry, formState: { errors:errors4NewEntry }, reset } = useForm();

  const handleDisplayForm = (item) => {
    setDefaultValues()
    reset()
    setSelectedActionItem(item)
  }
  const handleEnterContentIntoInputField = (item) => {
    setDefaultValues(prevState=>({...prevState, ...item}))
    if(openEditStringModal)setOpenEditStringModal(false)
    if(openEditDropDownModal)setOpenEditDropDownModal(false)
  }


  const makeEntry =(data, formName)=>{
    let template = {}
    template[formName]=data
    setResult(prevState=>[template, ...prevState ]);
    
  }

  const providerValue = {
    setOpenEditStringModal,
    setOpenEditDropDownModal,
    handleDisplayForm,
    setSelectedField,
    handleEnterContentIntoInputField,
    makeEntry,
    register4NewEntry,
    handleSubmit4NewEntry,
    reset,
    errors4NewEntry,
    INPUT,
    selectedActionItem,
    defaultValues,
    result
  };
  return (
    <context.Provider value={providerValue}>
      <div className='home-container'>
        <div className='leftSide'>
          <ContentArea/>
          <BottomBar/>
        </div>
        <div className='rightSide'>
          <RightHandPanel/>
        </div>
        {openEditStringModal && <Modal label={selectedField} setOpenModal={setOpenEditStringModal} modalTitle='editString'/>}
        {openEditDropDownModal && <Modal label={selectedField} setOpenModal={setOpenEditDropDownModal} modalTitle='editDropDown'/>}
      </div> 
    </context.Provider>
  );
}

export default App;
