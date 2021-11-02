# Spring Boot REST API with H2 Database

This is the server side of a small application of  user management application built using Spring Boot for the REST API with H2 for a database.
Demonstrates elementary Add operation in response to HTTP as well as returning JSON.

>RestControllers

> Dao Layer as JPA

> H2 As Database

## In Memory DB (H2)
I have included an in-memory database for the application. Database schema and sample data for the app is created everytime the app starts, and gets destroyed after the app stops, so the changes made to to the database are persistent only as long as the app is running
<br/>

## Getting Started

### Clone

- Clone this repo to your local machine.

### Installing

- First, install the dependencies

```sh
mvn clean install
```
### Running
- Second, run the production build with live reload
```sh
mvn spring-boot:run
```
When the application is first built, it will create a database file in the directory specified in the ```application.properties``` file.

## * Testing *

### Maven Tests
```
mvn test
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
