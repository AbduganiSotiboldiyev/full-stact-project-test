import React from 'react'
import Input from './input'
import TextArea from './text-area'
import { useSelector } from 'react-redux'

const AddForm = ({title, setTitle,description,setDescription,body,setBody,formSubmit}) => {
 
  const {isLoading} = useSelector(state => state.article)




  return (
    <div>
      
      <form className="w-75 mx-auto" onSubmit={formSubmit}> 
        <Input type={"text"} label={"title"} state={title} setState={setTitle}/>
        <TextArea label={"description"} state={description} setState={setDescription}  />
        <TextArea label={"body"} state={body} setState={setBody}  height={"300px"}/>
        <button className='btn btn-primary w-100'>
          {!isLoading ? "Create" : "Loading..."}
        </button>
        

      </form>

    </div>
  )
}

export default AddForm