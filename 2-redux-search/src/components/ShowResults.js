import { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'

class ShowResults extends Component {
    render() {
        if (this.props.results.length) {
            const cardsElement = this.props.results.map(result => {
                return (
                    <Card key={result.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" height="200" src={result.previewURL} />
                        <Card.Body>
                            <Card.Title>{result.user}</Card.Title>
                            <Card.Text>
                                {result.tags}
                            </Card.Text>
                            <Button variant="primary">preview</Button>
                        </Card.Body>
                    </Card>
                )
            })
            return (
                <div className="row">
                    <h3>Search results</h3>
                    <div className="row">{cardsElement}</div>
                    
                </div>
            )
        } else {
            return (
                <div className="row">
                    <h3>No Results to be shown</h3>
                </div>
            )
        }

    }
}

const mapStateToProps = (state) => {
    return {
        results: state.results
    }
}

export default connect(mapStateToProps)(ShowResults)