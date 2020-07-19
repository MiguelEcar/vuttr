# VUTTR (Very Useful Tools to Remember)



## Running

First things first:
- Make sure `Java` environment variable is correctly set.
- Make sure `Maven` environment variable is correctly set.
<!-- - Make sure `Node.js` and `Yarn` are installed and environment variables correctly set. -->

After cloning, or download and extract the repository:

### Spring Boot API

In the root folder of Spring Boot project,

On Windows,

```ps
    .\mvnw spring-boot:run
```

On Linux,

```sh
    sudo chmod +x ./mvnw
    sudo ./mvnw spring-boot:run
```

<!--
### ReactJS Client

```ps
    yarn install
    yarn start
```
-->

### Application defaults

- By default the application API runs on port `3000` and client side app runs on port `3001`

Other configuration may be change in the [`application.properties`](/vuttr-api/src/main/resources/application.properties).

#### **Attention

If changing the client side app port, remember to change the `cors.origin` in [`application.properties`](/vuttr-api/src/main/resources/application.properties).
