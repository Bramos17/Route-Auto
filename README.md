# CarCar

Team:

* Person 1 - Which microservice?
* Sophia Tony-Egbuniwe - Service

## Design

## Service microservice

The Service microservice will be used to keep track of service appointments for cars and their owners.

There will be 3 main models apart of this microservice: Technician, Appointment, and an Automboile Value Object. The main objective of the backend portion of the Service microservice will be to GET, POST, and DELETE technicians and to GET, POST, DELETE, and PUT (cancel/finish) appointments.

There will also be a poller functionality that will poll for Automobile data (vin numbers) from the Inventory microservice. That polled data will be added to the AutomobileVO in this microservice.

In the front-end part of this microservice, there will be a form to add technicians, a web page to list all of the technicians and their details, another from to create a service appointment, a web page to list all appointments and their details, and a web page to list all service history that has been created. The service appointments page will have the ability for the user to click a cancel or finish button which will change the appointment's status on the service history page and remove it from the appointment list. The base status will be "created". The service may be removed from the service appointment list but it will remain in the service history list. There will also be a VIP status functionality that will check to see if the car has been sold through this website by their vin number and automatically assigns VIP status.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
