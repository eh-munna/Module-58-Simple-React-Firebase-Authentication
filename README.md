"# Module-58-Simple-React-Firebase-Authentication"

# Module 58: Simple React Firebase Authentication

## 58-2 Create firebase project and Install Firebase SDK

### Steps for project in firebase

- How to make project in firebase and explore docs : visit the site
- Create project
- Register app (create config)
- follow the documentation
- add config to the project
  - **_web app's Firebase configuration_**
  - **Very important code and should not share with anyone else**

### Set up route and layouts

## 58-3 Initialize firebase auth and set Sign in with google

### Get Started with Firebase Authentication on Websites

- I have my credentials somewhere else, and I am using them to authenticate on different platform

- Steps to do so
  - Docs > Build > Authentication > Web > Get Started
  - There might be some problems that arise
    - getAuth may not be imported automatically
    - We have to manually import it with: import { getAuth } from 'firebase/auth';
    - const auth = getAuth(app); this app will not be found auto so we have to export it from our configuration file
    - Now we have to import it on our authentication page
- Authenticate Using Google
  - Create an instance of the Google provider object
    - Make provider with : const provider = new GoogleAuthProvider();
      - Remember new must be used

## 58-4 Open google login popup and Recap google popup sign in

### signInWithPopup ()

- Needs 2 parameters so we have to pass auth and provide as parameters
- Activate sign in method from authentication for user
- _ip address of local host is : 127.0.0.1_
- if another error occurred related to domain then we have to authorize domains

## 58-5 Display logged in user info, Sign out, toggle sign in, sign out

### Display logged in user info

- Logged user’s information will be saved in an object
- We would save the user info on a state
- Then will set the logged user on the state and access the data
- Display them on UI using ternary or logical and conditional rendering : if there is any data

### toggle sign in, sign out

- if there is a user logged in then sign out button and not then sign in button
