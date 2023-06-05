from django.urls import path
from .views import (
    api_list_appointment,
    api_list_technicians,
    api_show_appointment,
    api_show_technician,
)

urlpatterns = [
    path(
        'technicians/',
        api_list_technicians,
        name='api_create_technician',
    ),
    path(
        'technicians/<int:id>/',
        api_show_technician,
        name='api_show_technician',
    ),
    path(
        'appointments/',
        api_list_appointment,
        name='api_create_appointment',
    ),
    path(
        'appointments/<int:id>/',
        api_show_appointment,
        name='api_show_appointment',
    ),
]
