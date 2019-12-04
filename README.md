# Sanity Gatsby Project Portfolio

## Run Local Gatsby Development
1. Clone git Repo
2. Install Gatsby Cli globally
    ```
    npm install -g gatsby-cli
    ```
3. Open folder in shell and type the following commends
    ```
    cd client
    npm install
    gatsby develop
    ```
4. You can now view the Gatsby site in the browswer

    [http://localhost:8000/](http://localhost:8000/)
5. You can now view the GraphiQL, an in-browser IDE for GraphQL, to explore the data and schema

    [http://localhost:8000/___graphql](http://localhost:8000/___graphql)


## Access Sanity Studio
1. Register an account via [sanity.io/syntax](sanity.io/syntax)
2. Let me know the email you used so I can grant access
3. You can now run the Studio in one of the two following options

### Option 1: Run locoally
1. Install Sanity globally
    ```
    npm install -g @sanity/cli
    ```
2. Run the Sanity Studio locally
    ```
    cd studio
    npm install
    npm sanity start
    ```
### Option 2: Access the deployed Studio for this project
Sanity Studio can be access via https://gatsbyportfolio.sanity.studio/desk.


## Make changes to Sanity Stuido
**You MUST have administrator access to make changes to the studio**
1. One can change the Studio UI
2. One can define new or change project schemas
3. One can add plugins

To deploy changes to the desk please run the following code from the studio folder
```
sanity deploy
```
