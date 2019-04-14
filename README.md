## Employee Laptops 

Live version at 
https://employee-laptop.herokuapp.com/


### Install dependencies 

```
npm install
cd client 
npm install
```

### Initialize sequelize, set up models 

```
sequelize init
```

- create models & migrations 

```
sequelize model:create --name Employee --attributes name:string

sequelize model:create --name Laptop --attributes brand:string,model:string,serialNumber:string
```

- Edit migrations, model to add association, constraints (see slides)

- migrate

```
sequelize db:migrate
```

- Optionally seed database with example data.

### Run servers 

Run node/express server with 

```
nodemon
```

or 

```
node server.js
```

And run client with 

```
cd client
npm run serve 
```

### Credits 

Edit icon from 
https://icons8.com/icon/16260/edit-column

