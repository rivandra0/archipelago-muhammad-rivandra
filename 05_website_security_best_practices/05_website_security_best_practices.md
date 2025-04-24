# Website Security Best Practises

[Back](../README.md)

## Authentication, Token Stealing, etc

You need to make sure the authentication is as secure as possible. Is it worth it to use token based instead of session.
if we use JWT we need to think of edge cases such as, how if the token is stolen, how we can blacklist the token.
if we use session, it's quite harder to use it in a multiple services environment.

## SQL Injection prevention

Never append string directly when making SQL Query. The client can grab a select element in a page, Modify the option value with dangerous SQL, then the data is sent to the backend right, no validation, no verification. Now we just append the value into the query string. Dangerous Query runs. Our entire application crashes.
So use parameterized query at all times.

## XSS

The system where user can send data is dangerous right. Imagine this, user send dangerous JS script as a string, like grabbing user data then send it to an API. This entire logic can be crammed into an onclick="" statement. Now, we need to sanitize any data from backend, and This is what modern frontend frameworks do by not just creating string of html then turn it into element like lots of old jQuery code does. Instead, behind the scene the framework do cleaning and then securely renders the html.
So sanitize the data from backend before rendering.

## Bad Authorization

Lets say we have zero authorization system. as long as the user logged in, the user can access every single menu. The only fence holding users back is that, the "unaccessible" features are not displayed in the page. But, if a user know the url, they can access the highest level of features. This is dangerous, so proper authorization is important.

## Rate Limiting

I think we can limit request per ip address so our site not as easy to be attacked by DDOS.

## Do Rigorous Testing

Definitely must do testing phase in the development. I saw a website once, famous company, the error page is the debug one. I can see every single error messages there.
So I think enough testing will filter this big dangerous error. We can find the SQL Injection issues, XSS issues, etc. There are lots of tools for making this process easier such as OWASP ZAP and acunetix.

Overall I think that's my most important security best practices. I believe there are more others that I need to learn in the future.
