import axios from "axios";
import * as React from "react";
import { IProduct } from "../models";
import { ErrorMessage } from "./ErrorMessage";

const itemData: IProduct = {
  
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
      rate: 42,
      count: 10
    }

}

// TODO: pass function that returns nothing, so if 
interface createProductProps {
  onCreate: (item: IProduct) => void;
}

export function CreateProduct({onCreate}: createProductProps) {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState('') 

  // TODO: Prevent page reloading on Submit event and Create Item
  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('') // Every time clears error

    if(value.trim().length === 0) {
      setError('Please enter valid title')
      return
    }
    itemData.title = value;
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', itemData)
    
    // TODO: If item was created - them we call this functions
    onCreate(response.data)
  
  }

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={submitHandler} action="" method="POST">
      <input
        type="text"
        className="border py-2 px-4 mb-2 mr-5 w-full outline-0"
        placeholder="Enter product title"
        value={value}
        onChange={changeHandler}
      />
      {/* TODO: show error message if error is true*/}
      {error && <ErrorMessage error={error}/>}
      <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">
        Create
      </button>
    </form>
  );
}
