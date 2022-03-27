# NERV Stack Bootstrapper
Full-stack bootstrapper which is intended to include robust scaffolding for a full stack application, that is ready for production deployment in minutes. 


## Include Software Tools
- [x] Neo4j <img width="30" src="https://neo4j.com/wp-content/themes/neo4jweb/v2-templates/brand/assets/neo4j-icon-color.png"/>
- [x] Express
- [x] React
- [x] Vite
- [ ] Stripe
- [ ] OAuth
- [ ] Jest
- [ ] Cypress
- [x] Hygen
- [ ] SendGrid (Or Alternative)
- [ ] GraphQL

## Intended Feature Goals

### Server-Side Functionality
- [ ] JSON Web Token Support
- [ ] Authorization Templates
- [ ] Access Control Templates
- [x] Hygen Templates
- [ ] Location for custom validators
- [ ] Job Scheduling and Management
- [ ] Emailing Support (SendGrid)
- [ ] Robust Logging
- [ ] Standardized API Responses
- [ ] SSO Integration
- [ ] SSL Certificate Creation using LetsEncrypt
- [ ] Enforcing of TLS 1.3 Encryption (maybe not on local)
- [ ] Passport Library
- [ ] Auth0
- [ ] Stripe Integration
- [ ] graphql-codegen
- [ ] Serve compressed client files 
- [ ] Functional Logging tools (Output log to file, and activity logging)
- [ ] Centralized Password Reset Policy


### Client-Side Functionality
- [x] Hygen Templates
- [x] Global Modal
- [x] Loader Component
- [x] Toast Component
- [ ] Authentication Management
- [ ] Subscription Service Payment Templates
- [ ] Terms of Service Templates
- [ ] Privacy Policy Templates
- [ ] Toast Integration
- [ ] Sub Domain Functionality
- [ ] Accessibility Support
- [ ] Client Code Compression
- [ ] Mobile First Design Paradigm
- [ ] Alert Banner Context
- [ ] Expandable Side Nav with Z-Indexing, click outside to close, etc 


### Common Functionality
- [ ] Docker Support out of the Box!
- [ ] Heroku deployment configuration
- [ ] ESLint
- [ ] Jest
- [ ] Cypress





# Server File Structure

## Config: (server/src/config)
This folder is intended to store configuration data about the server. Typically, this will be where you would assign environmental variables to an object that will get imported into the code
