import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (error: string)=>void, setName: (name: string)=>void, addUserCallback: (name: string) => void) => {
    // name.trim() === ''?  setError('Ошибка! Введите имя!') :  addUserCallback(name); setName('')
    if(name.trim() === '') {
        setError('Ошибка! Введите имя!')
    } else {
        addUserCallback(name)
        setName('')
    }
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: (error: string)=>void) => { // если имя пустое - показать ошибку
    if(name.trim() === '') {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => { // если нажата кнопка Enter - добавить
    if(e.key === 'Enter') {
        addUser()
    }
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ( { users, addUserCallback } ) => {
   
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
        
        
    }

    const totalUsers = users.length // need to fix
    // const lastUserName = users.length > 0 ? users[users.length - 1] : '' // need to fix
    const lastUserName = users.at(-1)?.name // need to fix
    

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
