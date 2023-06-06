from django.contrib import admin
from .models import AutomobileVO, SalesPerson, SalesCustomer, Sales


@admin.register(AutomobileVO)
class AutomobileVOAdmin(admin.ModelAdmin):
    pass


@admin.register(SalesPerson)
class SalesPersonAdmin(admin.ModelAdmin):
    pass


@admin.register(SalesCustomer)
class SalesCustomerAdmin(admin.ModelAdmin):
    pass


@admin.register(Sales)
class SalesAdmin(admin.ModelAdmin):
    pass
