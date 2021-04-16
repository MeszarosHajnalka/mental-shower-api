# Node.js Rest APIs with Express, Sequelize & MySQL example

## Project setup

```
1. npm install
2. Setup db.config.js under the config folder

module.exports = {
  HOST: "",
  USER: "",
  PASSWORD: "",
  DB: "",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};


```

### Run

```
node server.js
```
