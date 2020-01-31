// import Todoform from '../../../Components/TodoForm';
import React from 'react';
import ReactDom from 'react-dom'
// import { create } from "react-test-renderer";
import Button from '../../../button'
import { cleanup,render } from '@testing-library/react';
import { createStore } from 'redux';
import Todo from '../../../Components/Todo'

import Reducer from '../../../reducer';
import { Provider } from 'react-redux';

afterEach(cleanup)
//1
it("renders todoform", () => {
    const div = document.createElement("div");
    ReactDom.render(<Button lable ="button click"></Button>,div)
}) 
//2
it("renders todoform", () => {
    const div = document.createElement("div");
    ReactDom.render(<Button lable ="somethin"></Button>,div)
}) 
//3
it("renders button component",() => {
    // const div = document.createElement("div");
    const { container } =  render(<Button></Button>);
    expect(container.querySelector('.App')).not.toBeNull();

})
//4
it("renders app component",() => {
const store = createStore(Reducer);
    const {container } = render(<Provider store = {store}><Todo /></Provider>)
    expect(container.querySelector('.ingredient-form')).not.toBeNull();
})
//5
it("renders app component",() => {
    const store = createStore(Reducer);
    const {container } = render(<Provider store = {store}><Todo /></Provider>)
    expect(container.querySelector('.ingredientrm')).toBeNull();
    expect(container.querySelector('#root')).toBeNull();

})
//6
it("renders app component",() => {
    const store = createStore(Reducer);
    const {container } = render(<Provider store = {store}><Todo /></Provider>)
    const label =  container.getElementsByTagName("label");
    expect(label.length).toBe(3);
})
//7 
