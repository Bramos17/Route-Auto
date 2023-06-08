# CarCar

Team:

* **Sales, Inventory (Show list of manufacturers, Create a manufacturer, Show list of vehicle models)** - Brandon Ramos
* **Service, Inventory (Create a vehicle model, Show list of automobiles, Create an automobile)** - Sophia Tony-Egbuniwe

## Design

Welcome!

This is our innovative car web application, designed to showcase our team's expertise and newly acquired skills.We have created this fully functioning application encompasses three Important aspects of an automobile dealership: **Sales**, **Inventory**, and **Service**. We focused on providing a seamless user experience, our application empowers users to explore a wide range of features, from managing service appointments and tracking sales history to accessing real-time inventory information. By incorporating advanced technologies and efficient microservices architecture, we have created a dynamic platform that will revolutionize the way automobile dealerships operate in the digital age. Follow along with  us on this exciting journey as we create and delivering a comprehensive and user-friendly car buying experience utlizing Sales, Inventory, and Service microservices.

## Service microservice

* **Service API**:

The Service microservice will be used to keep track of service appointments for cars and their owners.
There will be 3 main models apart of this microservice: Technician, Appointment, and an Automboile Value Object. The main objective of the backend portion of the Service microservice will be to GET, POST, and DELETE technicians and to GET, POST, DELETE, and PUT (cancel/finish) appointments.

* **Service Poller**:

There will also be a poller functionality that will poll for Automobile data (vin numbers) from the Inventory microservice. That polled data will be added to the AutomobileVO in this microservice.

* **Service Frontend**:

In the front-end part of this microservice, there will be a form to add technicians, a web page to list all of the technicians and their details, another from to create a service appointment, a web page to list all appointments and their details, and a web page to list all service history that has been created. The service appointments page will have the ability for the user to click a cancel or finish button which will change the appointment's status on the service history page and remove it from the appointment list. The base status will be "created". The service may be removed from the service appointment list but it will remain in the service history list. There will also be a VIP status functionality that will check to see if the car has been sold through this website by their vin number and automatically assigns VIP status.

**The following table will show what API endpoints were used.**
Action | Method | URL
------- | ------- | -------
List technicians | GET | http://localhost:8080/api/technicians/
Create a technician | POST | http://localhost:8080/api/technicians/
Delete a specific technician | DELETE | http://localhost:8080/api/technicians/:id
List appointments | GET | http://localhost:8080/api/appointments/
Create an appointment | POST | http://localhost:8080/api/appointments/
Delete an appointment | DELETE | http://localhost:8080/api/appointments/:id
Set appointment status to "canceled" | PUT | http://localhost:8080/api/appointments/:id/cancel
Set appointment status to "finished" | PUT | http://localhost:8080/api/appointments/:id/finish


## Sales microservice

* **Automobile Sales:**
  * The Sales functionality to keep track of automobile sales that come from the inventory. A person cannot sell a car that is not listed in the inventory, nor can a person sell a car that has already been sold.
  * Each Sales model will will connect woith the service and the Inventory, microservices.

* **Automobile Poller**
  * The Automobile Poller is updating the AutomobileVO every 60 seconds with updated VINs from Inventory service. this will allow all of the diffrent aspects of the website to communicate and share data with eachother.

* **Salesperson:**
  * The Salesperson Model with include: Name, and Employee_number
  * Salesperson Form: allows a person to enter the name and employee ID for a salesperson.
  * When the form is submitted, the salesperson is created.
  * The Salesperson Form Utilzes API endpoints to be able to, create, edit, view, list and Delete a salespoerson.
  * Access to an form in the Nav Bar will, (will add to allow an user to access a form that allows a user to enter a salesperson’s identification details like name and employee number.)
  * Salesperson links will be Create and List, the list will show a list of sales history by utilizing the automobile Vin, employee ID, and Coustomers name.

* **Customer:**
  * the Customer  Model with include: First Name, Last Name, Address, and Phone Number.
  * Salesperson Form: allows a person to enter and edit coustomer, First Name, Last Name, Address, and Phone Number.
  * When the form is submitted, the Coustomer is created.
  * The Coustomer Form Utilzes API endpoints to be able to, create, edit, view, list and Delete a Coustomer.
  * Access to an form in the Nav Bar will, (will add) to allow an user to access a form that allows a user to enter a Coustomer’s identification details like name and coustomer number.

* **Sale:**
  * the Sale Model with include: The Automobile VIN, Salesperson, Coustomer and Price of sale.
  * Salesperson Form: allows a person to enter the name and employee ID for a salesperson.
  * When the form is submitted, a new sale is created and assiged to a salesperson and an autombile.
  * The Sale Form Utilzes API endpoints to be able to, create, edit, view, list and Delete a sales.
  * Access to an form in the Nav Bar, this allows users to look at a salesperson and view there sales history.

**The following table will show what API endpoints were used.**
| Action                        | Method | URL                                         |
| ----------------------------- | ------ | ------------------------------------------- |
| List salespeople              | GET    | <http://localhost:8090/api/salespeople/>    |
| Create a salesperson          | POST   | <http://localhost:8090/api/salespeople/>    |
| Delete a specific salesperson | DELETE | <http://localhost:8090/api/salespeople/:id> |
| List customer                 | GET    | <http://localhost:8090/api/customer/>       |
| Create an customer            | POST   | <http://localhost:8090/api/customer/>       |
| Delete an customer            | DELETE | <http://localhost:8090/api/customer/:id>    |
| List sales                    | GET    | <http://localhost:8090/api/sales/>          |
| Create a sale                 | POST   | <http://localhost:8090/api/sales/>          |
| Delete a sale                 | DELETE | <http://localhost:8090/api/sales/:id>       |
