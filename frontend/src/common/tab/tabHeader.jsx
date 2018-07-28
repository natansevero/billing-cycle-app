import React , { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import If from '../operador/if'

import { seletecTab } from './tabActions'

class TabHeader extends Component {
    render() {
        const selected = this.props.tab.selected === this.props.target
        const visible = this.props.tab.visible[this.props.target]
        return (
            <If test={visible}>
                <li className={selected ? 'active' : '' }>
                    <a href='javascript:;' 
                        data-toogle='tab'
                        onClick={() => this.props.seletecTab(this.props.target)} 
                        data-target={this.props.target}>
                        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
                </li>
            </If>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })
const mapDispatchToProps = dispatch => bindActionCreators({ seletecTab }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)