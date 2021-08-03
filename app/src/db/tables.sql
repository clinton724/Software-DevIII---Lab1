CREATE TABLE dbo.[User]
(
    email VARCHAR(50) PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    school VARCHAR(50) NOT NULL,
    thumbnail VARCHAR(MAX) NULL,
    passwordHash VARCHAR(MAX) NOT NULL,
    yearOfStudy CHAR(10) NOT NULL
);