// import Todoform from '../../../Components/TodoForm';
import React from 'react';
import { cleanup,render } from '@testing-library/react';
import { createStore } from 'redux';
import Todo from '../../../Components/Todo'

import Reducer from '../../../reducer';
import { Provider } from 'react-redux';

afterEach(cleanup)

//1
it("checks if className ingredient-form exists",() => {
const store = createStore(Reducer);
    const {container } = render(<Provider store = {store}><Todo /></Provider>)
    expect(container.querySelector('.ingredient-form')).not.toBeNull();
})
//2
it("renders app component",() => {
    const store = createStore(Reducer);
    const {container } = render(<Provider store = {store}><Todo /></Provider>)
    expect(container.querySelector('.ingredientrm')).toBeNull();
    expect(container.querySelector('#root')).toBeNull();
})
//3
it("checks label length to 3 ",() => {
    const store = createStore(Reducer);
    const {container } = render(<Provider store = {store}><Todo /></Provider>)
    const label =  container.getElementsByTagName("label");
    expect(label.length).toBe(3);
})
//4
it("checks text content and button click",() => {
    const store = createStore(Reducer);
    const {getByRole } = render(<Provider store = {store}><Todo /></Provider>)
    expect(getByRole('heading')).toHaveTextContent('Tasks');
})