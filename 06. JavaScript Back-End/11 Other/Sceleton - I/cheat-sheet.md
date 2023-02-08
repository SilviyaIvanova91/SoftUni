# Cheat Sheet

1. Initialize project
2. Install & setup express
   - add routes
   - add body parser
   - add static route
3. Add view engine
   - register with express
   - add views folder
   - add home layout
   - add main layouts
   - add partial template folder
4. Add home controllers
   - add controller to routes
5. Configure database
   - set strict query / deprecation warning
6. Authentication
   - fix html links in layout
   - add auth controller
   - add register page
   - add login page
7. Add User model
8. Add auth service
9. Install bcrypt and cookie-parser and configure
10. Register user
    - validate repeat password
    - check if user exists
    - use bcrypt to hash password
11. Login user
    - check if user exists
    - check if password is valid
12. Generate jwt token
    - OPTIONAL: use util.promisify to use async
    - generate token with payload
    - add token to cookie
13. Add authentication middleware
    - add decoded token to request
    - use authentication middleware
14. Logout
15. Authorization middleware
16. Dynamic navigation
17. Error handling (local error handling)
    - inside action (local error)
    - [x] global error handling next
    - [x] actionWrapper
18. Add error notification to main layout
19. Login automatically after register
20. Parse errors
