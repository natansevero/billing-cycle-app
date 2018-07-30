import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, seletecTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

/* 
    redux-multi + redux-thunh = <3
    Usamos o poder o redux-thunk para retornar objetos de ação quando temos
    chamadas assincronas. E em parceria, usamos o redux-multi para retornar 
    varias ações dentro de um dispatch do redux-thunk
*/
export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(res => {
                toastr.success('Sucesso', 'Operação realizada com sucesso')
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    seletecTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])            
            })
            .catch(err => {
                err.response.data.errors.forEach(error => toastr.error('Error', error))
            })
    }
}