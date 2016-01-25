import React, {Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../components/Header'
import Main from '../components/Main'
import * as PageActions from '../actions/page'

class App extends Component {

	render() {
		return (
			<div>
				<Header />
				<Main title={this.props.title} actions={this.props.actions}/>
			</div>
		)
	}
}

App.propTypes = {
	title: PropTypes.string.isRequired,
  	actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
	return {
		title: state.page.title
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(PageActions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(App)