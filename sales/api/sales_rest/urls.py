from django.urls import path
from .views import (
    api_list_salespersons,
    api_show_salesperson,
    api_list_customer,
    api_customer,
    api_sale_details,
    api_list_sales,
)

urlpatterns = [
    path("sales/", api_list_sales, name="saleslist"),
    path("sales/<int:id>/", api_sale_details, name="saledetails"),
    path("salespeople/", api_list_salespersons, name="salespersonslist"),
    path("salespeople/<int:id>/", api_show_salesperson, name="salespersondetails"),
    path("customers/", api_list_customer, name="customerlist"),
    path("customers/<int:id>/", api_customer, name="customerdetails"),
]



