import Axios from 'axios'

export const getAll = () => Axios.get('/kisi/list')
export const deleteById = (id) => Axios.delete(`/kisi/delete/${id}`)
export const addKisi = (form) => Axios.post(`/kisi/save`, form)
