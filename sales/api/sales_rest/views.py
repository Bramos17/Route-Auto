from django.views.decorators.http import require_http_methods
import json
from django.http import JsonResponse
from .models import AutomobileVO, SalesPerson, SalesCustomer, Sales
from .encoders import (
        SalesPersonListEncoder,
        SalesPersonDetailEncoder,
        SalesCustomerEncoder,
        SalesEncoder,
    )


@require_http_methods(["GET", "POST", "DELETE"])
def api_list_salespersons(request):
    if request.method == "GET":
        salespersons = SalesPerson.objects.all()
        return JsonResponse(
            {'salespersons': salespersons},
            encoder=SalesPersonListEncoder
        )

    content = json.loads(request.body)
    salespersons = SalesPerson.objects.create(**content)
    return JsonResponse(
        salespersons,
        encoder=SalesPersonListEncoder,
        safe=False,
    )


@require_http_methods(["GET", "DELETE"])
def api_show_salesperson(request, id):
    if request.method == "GET":
        salesperson = SalesPerson.objects.get(id=id)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonDetailEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        count, _ = salesperson.objects.filter(id=id).delete()
        return JsonResponse(
            {'deleted': count > 0}
        )


@require_http_methods(["GET", "POST"])
def api_list_customer(request):
    if request.method == "GET":
        customers = SalesCustomer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=SalesCustomerEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = SalesCustomer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=SalesCustomerEncoder,
            safe=False,
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
def api_list_sales(request):
    if request.method == "GET":
        sales = Sales.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SalesEncoder,
            safe=False,
        )
    else:
        try:
            content = json.loads(request.body)
            if "automobile" in content:
                try:
                    auto = AutomobileVO.objects.get(vin=content["automobile"])
                    content["automobile"] = auto
                except AutomobileVO.DoesNotExist:
                    return JsonResponse(
                        {"message": "Automobile not found"},
                        status=404,
                    )
            if "salesperson" in content:
                try:
                    salesperson = SalesPerson.objects.get(
                        id=content["salesperson"])
                    content["salesperson"] = salesperson

                except SalesCustomer.DoesNotExist:
                    return JsonResponse(
                        {"message": "Customer not found"},
                        status=404,
                    )
            if "customer" in content:
                try:
                    customer = SalesCustomer.objects.get(id=content["customer"])
                    content["customer"] = customer

                except SalesPerson.DoesNotExist:
                    return JsonResponse(
                        {"message": "Salesperson not found"},
                        status=404,
                    )

            sale = Sales.objects.create(**content)
            return JsonResponse(
                {"sale": sale},
                encoder=SalesEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Not viable input"},
                status=400,
            )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_sale_details(request, id):
    if request.method == "GET":
        try:
            sales = Sales.objects.get(id=id)
        except Sales.DoesNotExist:
            return JsonResponse(
                {"message": "Sale does not exist"},
                status=400,
            )
        return JsonResponse(
            sales,
            encoder=SalesEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        try:
            sales = Sales.objects.get(id=id)
        except Sales.DoesNotExist:
            return JsonResponse(
                {"message": "Sales does not exist"},
                status=400,
            )
        sales.delete()
        return JsonResponse(
            {"message": "Sale deleted"},
            status=200,
        )
    else:
        try:
            content = json.loads(request.body)
            if "automobile" in content:
                auto = AutomobileVO.objects.get(vin=content["automobile"])
                content["automobile"] = auto
            if "salesperson" in content:
                salesperson = SalesPerson.objects.get(
                    id=content["salesperson"])
                content["salesperson"] = salesperson
            if "customer" in content:
                customer = SalesCustomer.objects.get(id=content["customer"])
                content["customer"] = customer
            Sales.objects.filter(id=id).update(**content)
            sale = Sales.objects.get(id=id)
            return JsonResponse(
                sale,
                encoder=SalesEncoder,
                safe=False,
            )
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Automobile not found"},
                status=404,
            )
        except SalesCustomer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer not found"},
                status=404,
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Salesperson not found"},
                status=404,
            )
