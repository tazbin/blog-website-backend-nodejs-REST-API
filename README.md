# blog-website-backend_REST_API

**blog-website** is one of my personal projects where registered blogger write blogs. Bloggers can also comment or react to blogs. This repository holds the code of it's backend which is a **RESTful API**.

<em> The frontend of this project can be found [here (REST API)](https://github.com/tazbin/blog-website-frontend_Angular). </em>

## Features:
- bloggers can create their profiles (token based authentication)
- bloggers can edit their profile
- bloggers can write posts. They can set the category of their blog (i.e. travel, medical, tech etc)
- registered bloggers can comment on their own or others blog
- registered bloggers can also react on others blog. They can react **like**, **love**, **sad**, **haha**, **informative** to blogs
- unregistred public users can read blogs but cann't comment or react n blogs
- Blogs of a particular category can be viewed

## Tech used:

**Runtime environment**
- [x] Node.js

**API for movies & their metadata**
- [x] OMDB API

**Database**
- [x] MongoDB

**Dependencies**
- [x] bcrypt: ^5.0.1,
- [x] cors: ^2.8.5,
- [x] dotenv: ^8.2.0,
- [x] express: ^4.17.1,
- [x] http-errors: ^1.8.0,
- [x] joi: ^17.4.0,
- [x] jsonwebtoken: ^8.5.1,
- [x] mongoose: ^5.12.2


