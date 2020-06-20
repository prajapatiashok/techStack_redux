import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Header extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { textStyle, viewStyle } = styles;

		return (
			<View style={viewStyle}>
				<Text style={textStyle}>
					{this.props.headerText}
				</Text>
			</View>
		);
	}
}

const styles = {
	textStyle: {
		fontSize: 20,

	},
	
	viewStyle: {
		backgroundColor: '#f8f8f8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 1,
		elevation: 3,
		position: 'relative'
		
	}
};
export { Header };