# Rune Group


* [ ] Setup User Authentication and Authorization
** [ ] Uses JWT for Authentication
** [ ] Creates a user object in MongoDB with User Model
** [ ] /api/register POST to signup
** [ ] /api/user/{id} GET a particular user
** [ ] /api/auth POST to auth and get JWT
** [ ] Tests

* [ ] Setup post creation and management
** [ ] Creates a Post Object in MongoDB with Post model
** [ ] /api/create_post POST as a protected route to make new posts
*** [ ] Authorizes the JWT
** [ ] /api/user/{id}/profile GET as a protected route to check post history and settings for account
*** [ ] Authorizes with JWT
** [ ] /api/admin Admin portal for managing posts on site ??
** [ ] /api/posts/{id} Get a particular post
** [ ] Tests

* [ ] Setup post view backend
** [ ] Some way to query the db with filters on posts
** [ ] Tests

* [ ] AngularJS Front End
* [ ] Deploy
