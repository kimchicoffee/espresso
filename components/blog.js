import React,{ Component } from 'react';


export default class Blog extends Component {
	constructor (props) {
		super(props)
		this.state = { posts : [] }
	}

	loadPostsFromServer () {
		$.ajax({
			url: '/api/posts',
			dataType: 'json',
			success: function(posts){
				this.setState({posts: posts});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error('/api/posts', status, err.toString());
			}.bind(this)
		})
	}

	componentDidMount () {
		this.loadPostsFromServer();
	}

	render () {
		return (
			<div>
			<PostList posts = {this.state.posts} />
			</div>
			)
	}
}

class PostList extends Component {
	render() {
		return(
			<ul>
				{this.props.posts.map(function(post){
					return(
						<PostItem key={post._id} post = {post} />
						)
				})}
			</ul>
			)
	}
}

class PostItem extends Component {
	render() {
		const post = this.props.post

		return(
			<li>
				<h2> {post.title} </h2>
			 	<p> {post.excerpt} </p>
			</li>
			)
	}
}