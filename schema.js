const axios = require('axios');
const {
	GraphQLObjectType,
	GraphQLSchema,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
} = require('graphql');

const CategoryType = new GraphQLObjectType({
	name: 'categories',
	fields: () => ({
		id: { type: GraphQLInt },
		title: { type: GraphQLString },
	}),
});
const AuthorType = new GraphQLObjectType({
	name: 'author',
	fields: () => ({
		name: { type: GraphQLString },
	}),
});
const FullType = new GraphQLObjectType({
	name: 'full',
	fields: () => ({
		url: { type: GraphQLString },
	}),
});
const ThumbnailType = new GraphQLObjectType({
	name: 'thumbnail',
	fields: () => ({
		full: { type: FullType },
	}),
});

const PostsType = new GraphQLObjectType({
	name: 'posts',
	fields: () => ({
		id: { type: GraphQLInt },
		title: { type: GraphQLString },
		date: { type: GraphQLString },
		categories: { type: new GraphQLList(CategoryType) },
		author: { type: AuthorType },
		thumbnail_images: { type: ThumbnailType },
	}),
});

const Category = new GraphQLObjectType({
	name: 'category',
	fields: () => ({
		id: { type: GraphQLInt },
		title: { type: GraphQLString },
		date: { type: GraphQLString },
		categories: { type: new GraphQLList(CategoryType) },
		author: { type: AuthorType },
		thumbnail_images: { type: ThumbnailType },
	}),
});

const PostType = new GraphQLObjectType({
	name: 'post',
	fields: () => ({
		id: { type: GraphQLInt },
		title: { type: GraphQLString },
		date: { type: GraphQLString },
		categories: { type: new GraphQLList(CategoryType) },
		author: { type: AuthorType },
		thumbnail_images: { type: ThumbnailType },
		content: { type: GraphQLString },
	}),
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		posts: {
			type: new GraphQLList(PostsType),
			args: {
				count: { type: GraphQLInt },
				page: { type: GraphQLInt },
			},
			resolve(parent, args) {
				return axios
					.get(
						`http://sehatnegeriku.kemkes.go.id/api/get_recent_posts/?count=${args.count}&page=${args.page}`
					)
					.then((res) => res.data.posts);
			},
		},
		category: {
			type: new GraphQLList(Category),
			args: {
				slug: { type: GraphQLString },
				count: { type: GraphQLInt },
				page: { type: GraphQLInt },
			},
			resolve(parent, args) {
				return axios
					.get(
						`http://sehatnegeriku.kemkes.go.id/api/get_category_posts/?category_slug=${args.slug}&count=${args.count}&page=${args.page}`
					)
					.then((res) => res.data.posts);
			},
		},
		detail: {
			type: PostType,
			args: {
				id: { type: GraphQLInt },
			},
			resolve(parent, args) {
				return axios
					.get(
						`http://sehatnegeriku.kemkes.go.id/api/get_post/?post_id=${args.id}`
					)
					.then((res) => res.data.post);
			},
		},
	},
});

module.exports = new GraphQLSchema({
	query: RootQuery,
});
