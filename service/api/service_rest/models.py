from django.db import models
from django.urls import reverse

# Create your models here.


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)


class Technician(models.Model):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    employee_id = models.PositiveIntegerField()

    def get_api_url(self):
        return reverse('api_show_technician', kwargs={'id': self.id})


class Appointment(models.Model):
    date_time = models.DateTimeField(auto_now_add=True)
    reason = models.CharField(max_length=300)
    status = models.CharField(max_length=20, default="created")
    vin = models.CharField(max_length=17, unique=True)
    customer = models.CharField(max_length=100)
    technician = models.ForeignKey(
        Technician,
        related_name='appointments',
        on_delete=models.PROTECT,
    )

    def get_api_url(self):
        return reverse('api_show_appointment', kwargs={'id': self.id})

    def cancel(self):
        self.status = "canceled"
        self.save()

    def finish(self):
        self.status = "finished"
        self.save()
