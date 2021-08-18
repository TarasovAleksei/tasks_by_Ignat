import React from 'react'
import {CheckPeopleAC, homeWorkReducer, SortPeopleAC,} from '../homeWorkReducer'
import {userType} from "../../HW8";


let initialState: userType[]

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, SortPeopleAC('up'))
    expect(newState.length).toBe(6)
    expect(newState.map(s => s.age)[0] >= newState.map(s => s.age)[1]).toBe(true)
    expect(newState.map(s => s.age)[1] >= newState.map(s => s.age)[2]).toBe(true)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, SortPeopleAC('down'))
    expect(newState.length).toBe(6)
    expect(newState.map(s => s.age)[0] <= newState.map(s => s.age)[1]).toBe(true)
    expect(newState.map(s => s.age)[1] <= newState.map(s => s.age)[2]).toBe(true)

})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, CheckPeopleAC(18))
    expect(newState.length).toBe(4)
    expect(newState.map(s => s.age)[0] >= 18).toBe(true)
    expect(newState.map(s => s.age)[1] >= 18).toBe(true)
    expect(newState.map(s => s.age)[2] >= 18).toBe(true)
    expect(newState.map(s => s.age)[3] >= 18).toBe(true)

})
