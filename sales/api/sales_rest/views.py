from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse
from .encoders import SalesPersonEncoder, SalesCustomerEncoder, SalesEncoder
from .models import AutomobileVO, SalesPerson, SalesCustomer, Sales


@require_http_methods(["GET", "POST"])
def api_salespersons(request):
    if request.method == "GET":
        employee = SalesPerson.objects.all()
        return JsonResponse(
            {'employee': employee},
            encoder=SalesPersonEncoder,
        )
    else:
        content = json.loads(request.body)
        sales_person = SalesPerson.objects.create(**content)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonEncoder,
            safe=False
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_salesperson(request, id):
    if request.method == "GET":
        try:
            sales_person = SalesPerson.objects.get(id=id)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            responce = JsonResponse({'error': 'Sales Person not found'})
            responce.status_code = 404
            return responce

    elif request.method == "PUT":
        try:

            content = json.loads(request.body)
            sales_person = SalesPerson.objects.get(id=id)
            sales_person.first_name = content["first_name"]
            sales_person.last_name = content["last_name"]
            sales_person.employee_id = content["employee_id"]
            sales_person.save()
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            responce = JsonResponse({'error': 'Sales Person not found'})
            responce.status_code = 404
            return responce

    elif request.method == "DELETE":
        try:
            sales_person = SalesPerson.objects.get(id=id)
            sales_person.delete()
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            responce = JsonResponse({'error': 'Sales Person not found'})
            responce.status_code = 404
            return responce


@require_http_methods(["GET", "POST"])
def api_customers(request):
    if request.method == "GET":
        customers = SalesCustomer.objects.all()
        return JsonResponse(
            {'Customers': customers},
            encoder=SalesCustomerEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = SalesCustomer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=SalesPersonEncoder,
            safe=False
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_customer(request, id):
    if request.method == "GET":
        try:
            customer = SalesCustomer.objects.get(id=id)
            return JsonResponse(
                customer,
                encoder=SalesCustomerEncoder,
                safe=False
            )
        except SalesCustomer.DoesNotExist:
            responce = JsonResponse({'error': 'SalesCustomer not found'})
            responce.status_code = 404
            return responce
    elif request.method == "PUT":
        try:
            content = json.loads(request.body)
            customer = SalesCustomer.objects.get(id=id)
            customer.first_name = content["first_name"]
            customer.last_name = content["last_name"]
            customer.address = content["address"]
            customer.email = content["email"]
            customer.phone_number = content["phone_number"]
            customer.save()
            return JsonResponse(
                customer,
                encoder=SalesCustomerEncoder,
                safe=False
            )
        except SalesCustomer.DoesNotExist:
            responce = JsonResponse({'error': 'SalesCustomer not found'})
            responce.status_code = 404
            return responce
    elif request.method == "DELETE":
        try:
            customer = SalesCustomer.objects.get(id=id)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=SalesCustomerEncoder,
                safe=False
            )
        except SalesCustomer.DoesNotExist:
            responce = JsonResponse({'error': 'SalesCustomer not found'})
            responce.status_code = 404
            return responce


@require_http_methods(["GET", "POST"])
def api_sales(request, employee_id=None):
    if request.method == "GET":
        if employee_id is not None:
            sales_person = Sales.objects.filter(id=employee_id)
            records = Sales.objects.filter(sales_person=sales_person)
        else:
            records = Sales.objects.all()
            return JsonResponse({"records": records}, encoder=SalesEncoder)
    else:
        try:
            content = json.loads(request.body)
            vin = content["automobile"]
            employee_id = content["SalesPerson"]
            customer_id = content["SalesCustomer"]

            content.update({
                "automobile": AutomobileVO.objects.get(vin=vin),
                "SalesPerson": SalesPerson.objects.get(
                    sales_person=employee_id
                ),
                "SalesCustomer": SalesCustomer.objects.get(
                    customer_id=customer_id
                )
            })

            record = Sales.objects.create(**content)
            return JsonResponse(record, encoder=SalesEncoder, safe=False)
        except (
            AutomobileVO.DoesNotExist,
            SalesPerson.DoesNotExist,
            SalesCustomer.DoesNotExist
        ):
            response = JsonResponse({'error': 'Sales not found'})
            response.status_code = 404
            return response


@require_http_methods(["GET", "PUT", "DELETE"])
def api_sale(request, id):
    if request.method == "GET":
        try:
            sale = Sales.objects.get(id=id)
            return JsonResponse(
                sale,
                encoder=SalesEncoder,
                safe=False,
            )
        except Sales.DoesNotExist:
            responce = JsonResponse({'error': 'Sales not found'})
            responce.status_code = 404
            return responce
    elif request.method == "PUT":
        try:
            content = json.loads(request.body)
            sale = Sales.objects.get(id=id)

            props = ["automobile", "salesperson", "customer", "price"]
            for prop in props:
                if prop == "vin":
                    vin = AutomobileVO.objects.get(vin_num=content["vin"])
                    setattr(sale, prop, vin)
                elif prop == "salesperson":
                    sales_person = SalesPerson.objects.get(
                        sales_person=content["salesperson"]
                        )
                    setattr(sale, prop, sales_person)
                elif prop == "customer":
                    customer = SalesCustomer.objects.get(
                        customer_id=content["customer"]
                        )
                    setattr(sale, prop, customer)
                else:
                    setattr(sale, prop, content[prop])
            sale.save()
            return JsonResponse(
                sale,
                encoder=SalesEncoder,
                safe=False
            )
        except Sales.DoesNotExist:
            responce = JsonResponse({'error': 'Sale not found'})
            responce.status_code = 404
            return responce
