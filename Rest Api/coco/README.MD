List of Tasks:-

- Register a user
- Login a user
- Get user Data
- Refresh the Token
- Logout a user
- Add new product
- Update a product
- Get all product
- Get single product
- Delete a product

Check list to handle request:-

1. Check List of Register user:-

- Validate the request
- Authorized the request
- Check if the user in data is already exists
- Prepare modal
- Store in database
- Generate jwt token
- Send response

2. Check List of Login user:-

- Validate the request
- Check the user existace in Database
- Compare user password
- Generate JWT token
- Send response

3. Check List of Get user data from Database:-

For getting user info from Auth JWT token user "Authorization" "Bearer `token`" in request header

- Add an middle ware to extract and Authenticate Token
- Filter unwanted field comming from DB
- Send Response

4. Refresh token :-

Refresh token must have unique key differ from create key

- Validate the request
- Check the Token in Database
- Verify Token
- Verify User
- Generate new Token
- Send Response

5. Logout User

- Validate the request
- Delete Refresh Token from Database
- Send Response

Breakes:-

- Break 1 : - 1:05
- Break 2 : - 1:45
- Break 3 : - 2:34
- Break 4 : - 3.13
