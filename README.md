# blog-website-backend_REST_API

**blog-website** is one of my personal projects where registered blogger write blogs. Bloggers can also comment or react to blogs. This repository holds the code of it's backend which is a **RESTful API**.

<em> The frontend of this project can be found [here (REST API)](https://github.com/tazbin/blog-website-frontend_Angular). </em>

## Features:
- bloggers can create their profiles (token based authentication)
- bloggers can edit their profile
- bloggers can write blogs. They can set the category of their blog (i.e. travel, medical, tech etc)
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

## How to install & run:
### Using Git (recommanded)
1. Navigate & open cli into the directory where you want to put this project. Initialize git & Clone this project (will be cloned inside myproject folder) using this command.
   
```bash
# initialize git
git init

# clone the project
git clone https://github.com/tazbin/blog-website-backend_nodejs_REST_API.git ./myproject
```
### Using manual download ZIP
1. Download repository
2. Extract the zip file, navigate into it & copy the folder to you desired directory

### Install npm dependencies after cloning or downloading
```bash
npm install
```

### Setting up environments
1. There is a file named `.env.example` on the root directory of the project
2. Create a new file by coping & pasting the file on the root directory & rename it to just `.env`
3. The `.env` file is already ignored, so your credentials insite it won't be commited
4. Change the values of the file. Make changes of comment to the `.env.example` file while adding new constants to the `.env` file.

### Run the project
```bash
npm start
```

You can be sure that server is running by checking this output in the command window
```bash
server running at port 3000...
mongodb successfully connected...
mongodb connected...
```

Press CTRL + C to stop the server.

## API endpoints:

#### *Indication*
- [x] **Authentication required**
- [ ] **Authentication not required**

### User related
- [ ] [Resgister](docs/user/register.md): `POST localhost:3000/user/register`
- [ ] [Login](docs/user/login.md): `GET localhost:3000/user/login`
- [x] [Edit user profile](docs/user/editUserProfile.md): `PUT localhost:3000/user/editProfile`
- [x] [Refresh tokens](docs/user/refreshTokens.md): `POST localhost:3000/user/me/refresToken`
- [x] [Get loggedin user's info](docs/user/getLoggedInUserInfo.md): `GET localhost:3000/user/me`
- [ ] [Get blogger's info](docs/user/getBloggersInfo.md): `GET localhost:3000/user/bloggerProfile/:bloggerId`

### Category related
- [x] [Create a new category](docs/category/createCategory.md): `POST localhost:3000/category`
- [ ] [Get list of all categories](docs/category/getListOfCategories.md): `GET localhost:3000/category`
- [ ] [Get list of all categories & blog counts](docs/category/getListOfCategoriezedBlogs.md): `GET localhost:3000/category/categorizedBlogs`

### Blog related
- [ ] Create a new blog: `POST localhost:3000/blog`
- [ ] Get list of all blogs with pagination: `GET localhost:3000/blog`
- [ ] Get list of all blogs of a blogger: `GET localhost:3000/blog/blogger/:bloggerId`
- [ ] Get details of a blog: `GET localhost:3000/blog/:blogId`
- [ ] Get list of all blogs of a selected category: `GET localhost:3000/blog/category/:categoryId`
- [x] React to a blog: `PUT localhost:3000/blog/react`
- [x] Comment to a blog: `POST localhost:3000/blog/comment`
- [x] Delete a comment: `DELETE localhost:3000/blog/comment`


