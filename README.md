# app-server

  Deploy Here:

[Resep Kita](http://localhost:3000)


## API Documentation


----
  **Create New To Do**
----
Create new Recipe list registration in Resep Kita App

* **URL**

  /recipe

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | name | <YOUR_name>	 | true |
  | ingredient | <YOUR_ingredient> | true |
  | imageurl | <YOUR_imageurl> | true |


* **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 

 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
    ```json
    [ "Please insert the Name! Value cant be empty!" ]
    ```

    OR

    ```json
    [ "Please insert the Ingredients! Value cant be empty!" ]
    ```

    OR

    ```json
    [ "Please insert the url! Value cant be empty!" ]
    ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```
    

----
  **Read All Recipe**
----
  Read All Recipe List

* **URL**

  /recipe

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

   none

* **Data Params**

   none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 



* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```


----
  **Find Recipe List by UserId**
----
  Read Recipe List by UserId

* **URL**

  /recipe/myrecipe

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

   none

* **Data Params**

   none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 


* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

    OR

    * **Code:** 404 NOT FOUND <br />
        **Content:** 
        ```json
        { "error" : "Error not found" }
        ```

----
  **Update Recipe**
----
  Update Recipe Data

* **URL**

  /recipe/:id

* **Method:**
  
  `PUT`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | UserId | <YOUR_UserId> | true |

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | name | <YOUR_name>	 | true |
  | ingredient | <YOUR_ingredient> | true |
  | imageurl | <YOUR_imageurl> | true |


* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 

 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
    ```json
    [ "Please insert the Name! Value cant be empty!" ]
    ```

    OR

    ```json
    [ "Please insert the Ingredients! Value cant be empty!" ]
    ```

    OR

    ```json
    [ "Please insert the ImageUrl! Value cant be empty!" ]
    ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ``

----
  **Delete Recipe**
----
  Delete Recipe Data by UserId

* **URL**

  /recipe/:id

* **Method:**
  
  `DELETE`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | UserId | <YOUR_UserId> | true |

* **Data Params**

   none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 

 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

    OR

    * **Code:** 404 NOT FOUND <br />
        **Content:** 
        ```json
        { "error" : "Error not found" }
        ```

----
  **User Register**
----
  Register to access feature Resep Kita

* **URL**

  /user/register

* **Method:**
  
  `POST`

* **Request Headers**

     none

* **URL Params**

    none

* **Data Params**

    | key | value | required |
    | :---: | :---: | :---: |
    | username | <YOUR_username>	 | true |
    | email | <YOUR_email> | true |
    | password | <YOUR_pasword> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 

 
* **Error Response:**

    * **Code:** 400 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

----
  **User Login**
----
  Login to access feature Resep Kita

* **URL**

  /user/login

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

    none

* **Data Params**

    | key | value | required |
    | :---: | :---: | :---: |
    | email | <YOUR_email> | true |
    | password | <YOUR_pasword> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    
 
* **Error Response:**

    * **Code:** 400 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

----
  **Email Resep Kita**
----
    Email Resep Kita Detail to your email

* **URL**

  /user/sendmail

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

    none

* **Data Params**

    | key | value | required |
    | :---: | :---: | :---: |
    | email | <YOUR_email> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 

 
* **Error Response:**

    * **Code:** 401 UNAUTHORIZED <br />
        **Content:** 
        ```json
        {
            code: "401",
            message: "Please login to use this feature!"
        }
        ```

    OR

    * **Code:** 401 UNAUTHORIZED <br />
        **Content:** 
        ```json
        {
            code: "401",
            message: "Unauthorized"
        }
        ```

    OR

    * **Code:** 401 Not Found <br />
        **Content:** 
        ```json
        {
            code: "404",
            message: "Not Found"
        }
        ```

    OR   

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        {
            code: "404",
            message: "INTERNAL SERVER ERROR"
        }
        ```

