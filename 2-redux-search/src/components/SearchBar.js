import { Component } from 'react'

import {
    InputGroup,
    Button,
    FormControl
} from 'react-bootstrap'


class SearchBar extends Component {
    render() {
        return (
            <div className="row mt-3">
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <Button variant="outline-secondary">Search</Button>
                </InputGroup.Prepend>
                <FormControl placeholder="Search Word" aria-describedby="basic-addon1" />
            </InputGroup>
            </div>
        )
    }
}

export default SearchBar