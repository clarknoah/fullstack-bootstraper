import { Roles } from "resources/Role/Role.entity";


export const ROLES = [
    {
        name: Roles.ADMIN,
        description: 'Admin Role',
    },
    {
        name: Roles.USER,
        description: 'User Role',
    },
];


export const CREATE_ROLES_MUTATION = `
    mutation createRoles($input: [RoleCreateInput!]!) {
        createRoles(input: $input) {
            roles {
                name
            }
        }
    }
`;

export const CREATE_USERS_MUTATION = `
    mutation createUsers($users: [UserInput!]!) {
        createUsers(users: $users) {
            id
            email
            password
            pendingEmail
            verificationToken
            loginRetries
            resetToken
            createdAt
            createdBy
            lastModifiedAt
            lastModifiedBy
            deletedAt
            deletedBy
            accountStatus
        }
    }
`;
