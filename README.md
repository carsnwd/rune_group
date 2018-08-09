# Rune Group


* [ ] Setup User Authentication and Authorization
  * [ ] Uses JWT for Authentication
  * [ ] Creates a user object in MongoDB with User Model
    * [ ] Use Runescape API to properly pull avatar and stats. ❗
  * [x] /api/register POST to signup
  * [x] /api/user/:username GET a particular user
  * [ ] /api/auth POST to auth and get JWT
  * [ ] Tests ❗

* [ ] Setup post creation and management
  * [ ] Creates a Post Object in MongoDB with Post model
    * [ ] Support time available. ❗
  * [x] /api/create_post a POST route to create a new post
  * [ ] /api/create_post POST as a protected route to make new posts
    * [ ] Authorizes the JWT
  * [ ] /api/user/:username/profile GET as a protected route to check post history and settings for account
    * [ ] Authorizes with JWT
  * [ ] /api/admin Admin portal for managing posts on site ??
  * [x] /api/post/:id Get a particular post
  * [ ] Tests ❗

* [ ] AngularJS Front End
  * [ ] Routing
  * [ ] Form validation
  * [ ] Filter/Search of posts
  * [ ] Navbar 
  * ❓
* [ ] Deploy
