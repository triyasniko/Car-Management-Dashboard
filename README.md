<div id="top"></div>
<!-- ABOUT THE PROJECT -->

## ERD

- DB Diagram (<a href="https://dbdiagram.io/d/6262e1a81072ae0b6ad206d2">Click Here</a>)
<br>
## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/triyasniko/Car-Management-Dashboard.git
   ```
2. Install packages
   ```sh
   npm install
   ```
3. Next Step

   ```sh
   - setting config.json

   - sequelize db:migrate
   - sequelize db:seed:all
   ```
4. Run
   ```sh
   nodemon app.js
   ```


## Info

- Get all cars : GET <code>/cars</code>
- Create a car : POST <code>/cars/create</code>
- Update a car : POST <code>/cars/edit/:id</code>
- Delete a car : DELETE <code>/cars/delete/:id</code>
