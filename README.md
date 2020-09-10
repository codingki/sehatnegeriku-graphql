# Graphql server for "Sehat Negeriku"

I used graphql to get the data from the API endpoint. Beacause the data I got, some of them are unnecessary so I think its better to use graphql on this project.

### API endpoint that I used :

- get recent posts
[http://sehatnegeriku.kemkes.go.id/api/get_recent_posts/?count=${args.count}&page=${args.page}](http://sehatnegeriku.kemkes.go.id/api/get_recent_posts/?count=$%7Bargs.count%7D&page=$%7Bargs.page%7D)
- get category posts
[http://sehatnegeriku.kemkes.go.id/api/get_category_posts/?category_slug=${args.slug}&count=${args.count}&page=${args.page}](http://sehatnegeriku.kemkes.go.id/api/get_category_posts/?category_slug=$%7Bargs.slug%7D&count=$%7Bargs.count%7D&page=$%7Bargs.page%7D)
- get post detail
[http://sehatnegeriku.kemkes.go.id/api/get_post/?post_id=${args.id}](http://sehatnegeriku.kemkes.go.id/api/get_post/?post_id=$%7Bargs.id%7D)
- search
[http://sehatnegeriku.kemkes.go.id/api/get_search_results/?search=${args.search}&count=${args.count}&page=${args.page}/](http://sehatnegeriku.kemkes.go.id/api/get_search_results/?search=$%7Bargs.search%7D&count=$%7Bargs.count%7D&page=$%7Bargs.page%7D/)

### Category slug :

- rilis-media
- blog
- infografis
- daerah
- video
- foto

Try this graphiql playground : [https://obscure-ridge-07773.herokuapp.com/graphql](https://obscure-ridge-07773.herokuapp.com/graphql)
