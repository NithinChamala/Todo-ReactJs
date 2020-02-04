// import Todoform from '../../../Components/TodoForm';
import React from 'react';
import { cleanup,render } from '@testing-library/react';
import { createStore } from 'redux';
import Todo from '../../../Components/Todo'

import Reducer from '../../../reducer';
import { Provider } from 'react-redux';

afterEach(cleanup)

//1
it("checks if className todo-form exists",() => {
const store = createStore(Reducer);
    const {container } = render(<Provider store = {store}><Todo /></Provider>)
    expect(container.querySelector('.todo-form')).not.toBeNull();
})
//2
it("renders app component",() => {
    const store = createStore(Reducer);
    const {container } = render(<Provider store = {store}><Todo /></Provider>)
    expect(container.querySelector('.todorm')).toBeNull();
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
it("checks text content ",() => {
    const store = createStore(Reducer);
    const {getByRole } = render(<Provider store = {store}><Todo /></Provider>)
    expect(getByRole('heading')).toHaveTextContent('Tasks');
})

//5
it("checks text content inside the document",() => {
    const store = createStore(Reducer);
    const {getByText } = render(<Provider store = {store}><Todo /></Provider>)
    expect(getByText('Filter by TaskName')).toBeInTheDocument();
    expect(getByText('Filter by Status')).toBeInTheDocument();
})