# blog-website-backend-nodejs-REST-API

**blog-website** is one of my personal projects where registered bloggers write blogs. Bloggers can also comment or react to blogs. This repository holds the code of it's backend which is a **RESTful API**.

<em> The frontend of this project can be found [here (Angular)](https://github.com/tazbin/blog-website-frontend_Angular) </em>

<em> Visit complete live project [lets-blog.netlify.app/all_blogs](https://lets-blog.netlify.app/all_blogs) </em> 

### Contents

- [Features](#features)
- [Tech used](#tech-used)
- [How to get the project](#how-to-get-the-project) 
- [Run the project using docker](#run-the-project-using-docker) 
- [API endpoints](#api-endpoints) 

## Features:
- bloggers can create their profiles (token-based authentication)
- bloggers can edit their profile
- bloggers can write blogs. They can set the category of their blog (i.e. travel, medical, tech etc)
- registered bloggers can comment on their own or others blog
- registered bloggers can also react on others blog. They can react **like**, **love**, **sad**, **haha**, **informative** to blogs
- unregistered public users can read blogs but can't comment or react n blogs
- Blogs of a particular category can be viewed

## Tech used:

**Runtime environment**
- [x] Node.js

**Database**
- [x] MongoDB

**Image storage service**
- [x] Cloudinary

**Testing framework**
- [x] Jest

**Containerization tool**
- [x] Docker

## How to get the project:
#### Using Git (recommended)
1. Navigate & open CLI into the directory where you want to put this project & Clone this project using this command.
   
```bash
git clone https://github.com/tazbin/blog-website-backend-nodejs-REST-API.git
```
#### Using manual download ZIP
1. Download repository
2. Extract the zip file, navigate into it & copy the folder to your desired directory

## Setting up environments
1. There is a file named `.env.example` on the root directory of the project
2. Create a new file by copying & pasting the file on the root directory & rename it to just `.env`
3. The `.env` file is already ignored, so your credentials inside it won't be committed
4. Change the values of the file. Make changes of comment to the `.env.example` file while adding new constants to the `.env` file.

## Run the project using docker
1. To build **docker image**
    ```bash
    docker compose build --no-cache
    ```

2. To run the **containers** in detached mode (wait for a while for database connection)
    ```bash
    docker compose up -d
    ```

3. To view running **containers**
    ```bash
    docker container ps
    ```

4. To view **API logs**
    ```bash
    docker logs letsblog-api-c
    ```

5. To **run tests**, first enter within the API container
   - on windows CMD (not switching to bash)
        ```bash
        docker exec -it letsblog-api-c /bin/sh
        ```
   - on windows CMD (after switching to bash)
        ```bash
        docker exec -it letsblog-api-c //bin//sh
        ```
        or
        ```bash
        winpty docker exec -it letsblog-api-c //bin//sh
        ```
    now run **test command**
    ```bash
    npm test
    ```
6. To exit from **API container**, press <kbd>Ctrl</kbd>+<kbd>D</kbd> on terminal

7. To **stop** the containers
    ```bash
    docker compose down
    ```

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
- [ ] [Get list of all categorized blog counts of user](docs/category/getListOfCategoriezedBlogs.md): `GET localhost:3000/category/categorizedBlogs/:bloggerId`

### Blog related
- [ ] [Create a new blog](docs/blog/createBlog.md): `POST localhost:3000/blog`
- [ ] [Get list of all blogs with pagination of certain category of a user](docs/blog/getLIstofAllBlogsWithPagination.md): `GET localhost:3000/blog/:bloggerId?/:categoryId?`
- [ ] [Get details of a blog](docs/blog/getDetailsOfBlog.md): `GET localhost:3000/blog/:blogId`
- [ ] [Get list of all blogs of a selected category](docs/blog/getBlogsOfSelectedCategory.md): `GET localhost:3000/blog/category/:categoryId`
- [x] [React to a blog](docs/blog/reactToBlog.md): `PUT localhost:3000/blog/react`
- [x] [Comment to a blog](docs/blog/commentToBlog.md): `POST localhost:3000/blog/comment`
- [x] [Delete a comment](docs/blog/deleteCommentFromBlog.md): `DELETE localhost:3000/blog/comment`
