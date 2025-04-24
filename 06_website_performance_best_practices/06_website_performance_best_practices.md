# Website Performance Best Practises

[Back](../README.md)

## Optimize Query

Indexing is a must. Then for each suspicious query, you need to see the execution plan, I believe modern DBMS shows exactly whats problematic from the query clearly. Most of the time that I saw, is a query that returns thousands of data causing deadlocks in the database. If possible, I think server side pagination is more advised for better performance. Then at times I saw people just join two huge tables before filtering it. As I remember it helps to use subquery to take piece of the big tables then join the small new tables. For now regarding SQL this is what I learned.

## Reduce Media Size

In the frontend, the main issue with common page is media size. I saw lots of website with 3-5 MB on a single hero section. Too heavy. So Compress the media size then use optimized format like webp. Also limits the JS, I think less JS is better. I did all this and I signifficantly improve my GTMetrix score.

## Lazy Loading

For a huge page, I think this is a must. You cannot just make the user wait 5 seconds for all of the data, media, etc to load. So lazy loading must be implemented strategically.

## Decision to use SSR or CSR

If the page need SEO we can go with SSR or pre rendered pages. But for SSR, it will put more burden on the backend for rendering data. But I think for anything other than page that must have good SEO score. Can go with SSR or CSR, but again if you want to reduce rendering load, CSR is lighter on the server. If we need to really press the server cost, I think CSR is cheaper.

## Caching

I believe there are lots of data, that is queried by lots of user at the same time. This where caching stand out. So if we have a 1000 user that trying to access a question object from database. We don't need to strain the database with 1000 queries. We only need to query once then just store it temporarily on memcached or redis or even just in memory storage provided by specific framework. So strategic caching is a must. Caching is simple concept with tricky implementations. If you do it wrong then a user can get another users data.
