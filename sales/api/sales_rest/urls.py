from django.urls import path
from .views import (
    api_salespersons,
    api_salesperson,
    api_customers,
    api_customer,
    api_sale,
    api_sales,
)

urlpatterns = [
    path("sales/", api_sales, name="api_create_sale"),
    path("sales/<int:employee_id>/sales/", api_sales, name="api_list_sales"),
    path("sales/<int:id>/", api_sale, name="api_show_sale"),
    path("salespeople/", api_salespersons, name="api_list_persons"),
    path("salespeople/<int:id>/", api_salesperson, name="api_show_person"),
    path("customers/", api_customers, name="api_list_customers"),
    path("customers/<int:pk>/", api_customer, name="api_show_customer"),
]
