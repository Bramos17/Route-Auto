from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin


class SalesPerson(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    employee_id = models.IntegerField()

    def __str__(self):
        return self.first_name + " " + self.last_name

    def get_api_url(self):
        return reverse("api_show_salesperson", kwargs={"id": self.id})


class SalesCustomer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)

    def __str__(self):
        return self.first_name + " " + self.last_name

    def get_api_url(self):
        return reverse("api_show_customer", kwargs={"id": self.id})


class Sales(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales_record",
        on_delete=models.CASCADE,
        )
    salesperson = models.ForeignKey(
        "SalesPerson",
        related_name="sales_record",
        on_delete=models.CASCADE,
        )
    customer = models.ForeignKey(
        "SalesCustomer",
        related_name="sales_record",
        on_delete=models.CASCADE,
        )
    price = models.DecimalField(max_digits=10, decimal_places=2)
    sold_on_date = models.DateField(null=False)

    def __str__(self):
        return f"Sale of {self.vin} by {self.sales_person}"

    def get_api_url(self):
        return reverse("api_show_sales", kwargs={"id": self.id})
