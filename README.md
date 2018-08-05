# Rune Group


* [ ] Setup User Authentication and Authorization
  * [ ] Uses JWT for Authentication
  * [x] Creates a user object in MongoDB with User Model
  * [x] /api/register POST to signup
  * [x] /api/user/:username GET a particular user
  * [ ] /api/auth POST to auth and get JWT
  * [ ] Tests

* [ ] Setup post creation and management
  * [x] Creates a Post Object in MongoDB with Post model
  * [x] /api/create_post a POST route to create a new post
  * [ ] /api/create_post POST as a protected route to make new posts
    * [ ] Authorizes the JWT
  * [ ] /api/user/:username/profile GET as a protected route to check post history and settings for account
    * [ ] Authorizes with JWT
  * [ ] /api/admin Admin portal for managing posts on site ??
  * [x] /api/post/:id Get a particular post
  * [ ] Tests

* [ ] Setup post view backend
  * [ ] Some way to query the db with filters on posts
  * [ ] Tests

* [ ] AngularJS Front End
* [ ] Deploy
