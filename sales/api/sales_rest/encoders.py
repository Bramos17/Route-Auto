from common.json import ModelEncoder
from .models import AutomobileVO, SalesPerson, SalesCustomer, Sales


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["import_href", "vin"]


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ['vin', 'sold']


class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "first_name",
        "employee_id",
        "id"
        ]


class SalesPersonDetailEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id"
    ]


class SalesCustomerEncoder(ModelEncoder):
    model = SalesCustomer
    properties = [
        "first_name",
        "last_name",
        "address",
        "email",
        "phone_number"
        ]


class SalesEncoder(ModelEncoder):
    model = Sales
    properties = [
        "automobile",
        "salesperson",
        "customer",
        "price",
        "sold_on_date"
        ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "salesperson": SalesPersonListEncoder(),
        "customer": SalesCustomerEncoder(),
        }
