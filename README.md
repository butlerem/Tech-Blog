# Tech Blog

## Description

The Tech Blog is a CMS-style blog site where developers can publish their blog posts and comment on other developers' posts as well. Users can also manage their own posts.

## Features

- User Authentication
- Blog Post Creation
- Commenting
- Data Persistence

## Technologies Used

- Node.js
- Express.js
- MySQL
- Sequelize ORM
- Handlebars.js
- bcrypt for password hashing

## Installation

1. Clone the repository: `git clone https://github.com/butlerem/Tech-Blog.git`
2. Navigate to the directory: `cd Tech-Blog`
3. Install dependencies: `npm install`
4. Create a `.env` file with your MySQL credentials and database name:
    ```
    DB_NAME='your_database_name'
    DB_USER='your_mysql_username'
    DB_PASSWORD='your_mysql_password'
    ```
5. Run the schema: `mysql -u root -p < db/schema.sql`
6. Seed the database: `npm run seed`
7. Start the server: `npm start`

## Usage

Once the server is running, navigate to `http://localhost:3001/` in your browser. 

## License

This project is licensed under the MIT License.
