import React from 'react';
import PropTypes from 'prop-types';
import ProjectList from '../ProjectList/ProjectList';
import Toolbar from '../Toolbar/Toolbar';

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
        this.state = {selected: 'All'};
    }
    
    render() {
        return (
            <>
            <Toolbar
                filters={this.filters}
                selected={this.state.selected}
                onSelectFilter={(filter) => this.setState({selected: filter})}
                ></Toolbar>
            <ProjectList projects={this.state.selected === 'All' ? this.props.list : this.props.list.filter(elem => elem.category === this.state.selected)} />
            </>
        )
    }
}

Portfolio.propTypes = {
    list: PropTypes.array.isRequired
}