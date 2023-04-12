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
