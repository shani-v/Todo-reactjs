import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [todo, setTodo] = useState([])
  const [input, setInput] = useState()

  const Add = () => {
    if (input.length > 0) {
      const DummyTodo = todo
      DummyTodo.push(input)
      console.log(DummyTodo)
      setTodo(DummyTodo)
      setInput('')
    }
    console.log(todo)
  }

  const dell = (id) => {
    let newtodo = [...todo]
    newtodo.splice(id, 1)
    setTodo(newtodo)
  }

  return (
    <div className='flex justify-center mt-40'>
      <div className='bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600  w-96 min-h-fit pl-6'>
        <h1 className='text-2xl font-semibold text-center mt-3 text-red-500'>
          TODO LIST
        </h1>
        <form className='mt-5'>
          <div class='text-center'>
            <h1 className='text-base font-semibold'>Add Todo </h1>
            <input
              type='text'
              value={input}
              class='h-10 w-60  mt-3'
              placeholder='Add Todo'
              required
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={Add}
              className='bg-green-400 h-10 w-12 hover:bg-green-500 '
            >
              Add
            </button>
          </div>
          <div className=' mt-5'>
            {todo?.map((e, index) => {
              return (
                <>
                  <div
                    key={index}
                    id={index}
                    className='flex justify-center mt-3 mb-3  '
                    onClick={() => dell(index)}
                  >
                    <div className='  bg-zinc-400 h-10 w-60 '>
                      <h1 className='text-center p-2 font-semibold'> {e}</h1>
                    </div>
                    <button
                      type='submit '
                      className='  p-2 bg-slate-50 w-12 h-10 '
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke-width='1.5'
                        stroke='currentColor'
                        class='w-6 h-6'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                        />
                      </svg>
                    </button>
                  </div>
                </>
              )
            })}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
