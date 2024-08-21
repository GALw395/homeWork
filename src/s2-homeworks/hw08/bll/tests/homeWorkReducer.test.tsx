import React from 'react'
import { homeWorkReducer } from '../homeWorkReducer'
import { UserType } from '../../HW8'

let initialState: UserType[]

beforeEach(() => {
    initialState = [
        { _id: 0, name: 'Лера', age: 17 },
        { _id: 1, name: 'Лена', age: 22 },
        { _id: 2, name: 'Настя', age: 16 },
        { _id: 3, name: 'Алеся', age: 24 },
        { _id: 4, name: 'Маша', age: 25 },
        { _id: 5, name: 'Снежана', age: 21 },
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {
        type: 'sort',
        payload: 'up',
    })

    expect(newState[0]._id).toBe(3)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {
        type: 'sort',
        payload: 'down',
    })

    expect(newState[0]._id).toBe(5)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {
        type: 'check',
        payload: 18,
    })

    expect(newState.length).toBe(4)
})
