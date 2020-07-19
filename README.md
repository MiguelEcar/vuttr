# VUTTR (Very Useful Tools to Remember)

## Implementation
This repository contains a VUTTR (Very Useful Tools to Remember) application.
The information is stored in a Database.
The application is secured based on OAuth2 protocol, in order to ensure a minimum data security.
Thus, the application user should register and sign in into the application to consult the stored information.

For testing purposes, it uses H2 Database, which may be easily replaced for production uses.
If changing the Database, Flyway migrations should be adjusted.

## Endpoints
- [GET] `/tools?tag=XX` returns all tools (if no filter) or the tools list filtered by tag.
- [POST] `/tools` adds a new tool
- [DELETE] `/tools/:id` remove tool by ID

- [POST] `/user` adds a new user
- [POST] `/oauth/token` sign in the application

## Endpoints

### 1: `GET /tools`

Response:
```json
    [
        {
            id: 1,
            title: "Notion",
            link: "https://notion.so",
            description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
            tags: [
                "organization",
                "planning",
                "collaboration",
                "writing",
                "calendar"
            ]
        },
        {
            id: 2,
            title: "json-server",
            link: "https://github.com/typicode/json-server",
            description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
            tags: [
                "api",
                "json",
                "schema",
                "node",
                "github",
                "rest"
            ]
        },
        ...
    ]
```

### 2: `GET /tools?tag=node`

Response:
```json
    [
        {
            id: 2,
            title: "json-server",
            link: "https://github.com/typicode/json-server",
            description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
            tags: [
                "api",
                "json",
                "schema",
                "node",
                "github",
                "rest"
            ]
        },
        ...
    ]
```

### 3: `POST /tools

```json
    {
        "title": "hotel",
        "link": "https://github.com/typicode/hotel",
        "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
        "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
    }
```

Response: `Status: 201 Created`

```json
    {
        "id":4
        "title": "hotel",
        "link": "https://github.com/typicode/hotel",
        "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
        "tags":["node", "organizing", "webapps", "domain", "developer", "https", "proxy"],
    }
```

### 4: `DELETE /tools/:id`

Response:

`Status: 204 No Content`



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
