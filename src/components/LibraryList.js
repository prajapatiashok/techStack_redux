import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    renderItem ({item}) {
        return <ListItem library={item} />
    }
    render() {
        return (
            <FlatList
                data={this.props.libraries}
                keyExtractor={library => library.id.toString()}
                renderItem={this.renderItem}
            />
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries }
}


export default connect(mapStateToProps)(LibraryList);