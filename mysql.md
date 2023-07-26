⚪ Steps to create database tables for smooth functioning of the project:

⚪ My database's username is "root," and the password is also "root." Update it as per your settings.

⚪ Execute the following commands on the database application's console:

Create database blockchain;
Use blockchain;
Create a table student with columns: rollNo varchar(100), univName varchar(100), studName varchar(100), fatherName varchar(100), course varchar(100), dateOfAward varchar(100), grade varchar(100);
Create a table record with columns: rollno varchar(100), txhash varchar(100);
Create a table login with columns: User varchar(100), Pass varchar(100).
⚪ Update the login table as per your customization and ensure to store SHA-256 cryptographic hash of passwords in the database, not the direct passwords. To achieve this, add any username and password's SHA-256 cryptographic hash. When logging in, input the original username and original password, not the hashed password.