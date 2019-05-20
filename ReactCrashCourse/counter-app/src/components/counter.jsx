import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0,
        tags: [1, 2, 3]
    }

    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    }

    handleIncrement = (product) => {
        console.log(product)
        this.setState({ count: this.state.count + 1 })
    }

    doHandleIncrement = () => {
        this.handleIncrement({ id: 1 })
    }

    render() {
        let classes = this.getBadgeClasses();
        console.log('props', this.props)

        return (
            <div>
                <span
                    className={classes}
                    style={this.styles}
                    className='badge badge-primary m-2'
                >
                    {this.formatCount()}
                </span>
                <button
                    onClick={this.doHandleIncrement}
                    className='btn btn-secondary btn-sm'
                >
                    Increment
                </button>

            </div>
        )
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state

        return count === 0 ? 'Zero' : count
    }

}

export default Counter