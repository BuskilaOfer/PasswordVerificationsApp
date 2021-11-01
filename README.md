## Password Verifications App - Angular Frontent with SpringBoot (Java) Backend
Application to demonstrate various parts of a service oriented RESTfull application. 


## Prerequisites
Ensure you have this installed before proceeding further
- Java 8
- Maven 3.8 or above, 
- Node 14.6 or above,  
- npm 7 or above,   
- Angular-cli 10 or above

## About
This is an RESTfull implementation of an order processing app based on Northwind database schema from Microsoft.


* Build
  * How to build all in one app that includes (database, sample data, RESTfull API, Auto generated API Docs, frontend and security)
  * Portable app, Ideal for dockers, cloud hosting.

## In Memory DB (H2)
I have included an in-memory database for the application. Database schema and sample data for the app is created everytime the app starts, and gets destroyed after the app stops, so the changes made to to the database are persistent only as long as the app is running
<br/>


### Build Frontend 
Code for frontend is allready compiled and saved under the ```webui/dist``` 
when building the backend app (using maven) it will pickup the code from ```webui/dist```. However if you modified the frontend code and want your changes to get reflected then you must build the frontend 
```bash
# Navigate to PROJECT_FOLDER/webui (should contain package.json )
npm install
# build the project (this will put the files under dist folder)
ng build --prod --aot=true
```

### Build Backend (SpringBoot Java)
```bash
# Maven Build : Navigate to the backend folder where pom.xml is present 
mvn clean install
```

### Start the API and WebUI server
```bash
# Start the server (9119)
# port and other configurations for API servere is in [./src/main/resources/application.properties](/src/main/resources/application.properties) file

# If you build with maven jar location will be 
java -jar ./target/app-1.0.0.jar

# If you build with gradle jar location will be 
java -jar ./build/libs/app-1.0.0.jar
```


### Screenshots
#### Empty Form
![Dashboard](/screenshots/Empty Form.png?raw=true)
---
#### Full Form
![Dashboard](/screenshots/Full Form.png?raw=true) 
---

