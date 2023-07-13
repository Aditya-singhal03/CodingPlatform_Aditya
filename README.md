# CodingPlatform ( MERN )
- This is a Coding Platform 
- User Can Signup and make their profile ( Access token will be given with 1-day expiry ), and log in with their credentials.
- There are two types of users -> admin and participant.
- Created a middleware to differentiate admins from participants.
- Admin can Add a problem, Edit a problem, Delete a problem, and can add Test Cases to a problem.
- Problems will be maintained in DataBase ( MongoDB ) and will be simultaneously added to the **sphere engine platform** using their API. Edit and delete requests are also send to the sphere engine via API.
- Participants can submit a solution to a problem, the solution will be sent to the Sphere Engine and the **correctness**  of the solution will be given.
- Result of solution can be -> **Wrong Answer, Accepted, Compilation Error, Time limit Exceeded, Run time Error**.

## Steps to run the project locally

- clone the repo using `git clone https://github.com/Aditya-singhal03/CodingPlatform_Aditya.git`
- run `npm install` to download all dependencies.
- create the dot env file and include MONGO_URL (your mongoDB URI), Password_Security_Key,  JWT_Security_Key, Access_Token ( Acess token of the Sphere Engine )
- Now you are ready to make a request using **POSTMAN**.

  ### SignUp
  - Add name, email, password, and role ( admin, participant ). **Response** -> Access Token, Email.
    ![](./images/SignUp.png)
  ### LogIn
  - Give email and password. **Response** -> Access Token, Email
    ![](./images/LogIn.png)
  ### Add Question ( Admin Only )
  - Add **Access Token** in the header file as a token
   ![](./images/Create%20Question%20Header.png)
  - While creating a question give each and every detail about the question involving -> **Name, Description, Input Description, Output Description, Example Case Input, Example Case Ouput**.
    ![](./images/Create%20Question%20Body%20+%20Response.png)
  ### Editing Question (Admin Only )
  - Similarly add **Access Token** in the header file as a token.
  - Add the relevant changes you want to make.
    ![](./images/Edit%20Question%20Body%20+%20Response.png)
  ### Delete question
   ![](./images/Delete%20Question%20response.png)
  ### Adding Test Case to a problem (Admin Only)
  - Add Access token to Header.
  - Give the input and output of the test case as a string, There is a **smarter** way of creating Test cases, add multiple test cases in one case.
    ![](./images/Creating%20Test%20Case%20Response.png)
  ### Submitting Solution to Question (Have to be a User )
  - Add Access token in Header.
  - Add the **Code Submission** as a string in the request body. We will keep taking care of line breaks in the input Code.
  - **Response** to the submission can be ->
    ### Compilation Error
    - The code has a compilation error
    ![](./images/Solution%20Submission%20-%20Compilation%20Error..png)
    ### Wrong Answer
     ![](./images/Solution%20Submission%20-%20Wrong%20Answer.png)
    ### Accepted
      ![](./images/Solution%20Submission%20-%20Accepted.png)
