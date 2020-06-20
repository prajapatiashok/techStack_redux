import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, NativeModules } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class ListItem extends Component {

    componentDidUpdate() {
        LayoutAnimation.spring()
    }

    renderDescription() {
        const { library, expanded } = this.props;
        if(expanded) {
            return (
                <CardSection>
                    <Text style={{flex: 1, paddingHorizontal: 15}}>{library.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library;

        return(
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle :{
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = (state, ownProps) => {
    //ownProps is the object jasko value ===> ListItem ma aru components bata pass gareko data as a props
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem);