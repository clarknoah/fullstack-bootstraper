// Create User Roles
import fetch from "node-fetch";
import { env } from "config/globals";
import { CREATE_ROLES_MUTATION, ROLES } from "./data";
import "reflect-metadata";
import "module-alias/register"
// Create Admin User

// Create basic user


async function main(){
    let response = await fetch("http://"+env.GRAPHQL_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({query: CREATE_ROLES_MUTATION, variables: {input: ROLES}})
    })

    let data = await response.json();
    console.log(data);

}


main();