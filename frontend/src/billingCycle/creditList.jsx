import React, { Component } from 'react'
import { Field } from 'redux-form'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'

class CreditList extends Component {
    
    /* 
        O 'name' que o Field acessa, está no estado controlado pelo redux-form
        Como a gente passa um obj BillingCycle, este objeto contem:
            name, month, year, credits[], debts[]
        Por isso que no name, conseguimos acessar estes arrays, pois eles existem lá
    */
    renderRows() {
        return (
            <tr>
                <td><Field name='credits[0].name' component={Input}
                    placeholder='Informe o nome' readOnly={this.props.readOnly} /></td>
                <td><Field name='credits[0].value' component={Input} 
                    placeholder='Informe o valor' readOnly={this.props.readOnly} /></td>
                <td></td>                
            </tr>
        )
    }
    
    render() {
        return (
            <Grid>
                <fieldset>
                    <legend>Créditos</legend>
                    <table>
                        <thead>
                            <tr>
                                <td>Nome</td>
                                <td>Valor</td>
                                <td>Ações</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList