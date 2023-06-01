/*
 * @Author: ja
 * @Date: 2023-06-01 14:06:04
 * @LastEditors: ja
 * @LastEditTime: 2023-06-01 14:06:10
 */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// const root = document.getElementById('root');
const root = document.querySelector('#root')

if(root) {
  createRoot(root).render(<App />)
}
