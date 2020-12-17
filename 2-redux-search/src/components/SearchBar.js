import { Component } from 'react'
import {connect} from 'react-redux'

import {setResult} from '../actions'

import {
    InputGroup,
    Button,
    FormControl
} from 'react-bootstrap'

import {getData} from '../services'

class SearchBar extends Component {
    state = {
        searchWord: ''
    }
    searchBtnClick = () => {
        getData(this.state.searchWord).then(data => {
            this.props.setResult(data.hits)
            console.log(data);
        })
    }
    inputKeyPress = e => {
        if (e.keyCode === 13){
            this.searchBtnClick()
        }
    }
    render() {
        return (
            <div className="row mt-3">
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <Button onClick={this.searchBtnClick} variant="outline-secondary">Search</Button>
                </InputGroup.Prepend>
                <FormControl
                onKeyUp={this.inputKeyPress} 
                value={this.state.searchWord} 
                onChange={e => {this.setState({searchWord: e.target.value})}}
                placeholder="Search Word" 
                aria-describedby="basic-addon1" />
            </InputGroup>
            </div>
        )
    }
}

export default connect(null, {setResult})(SearchBar)