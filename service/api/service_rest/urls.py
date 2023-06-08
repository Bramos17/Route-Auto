from django.urls import path
from .views import (
    api_list_appointment,
    api_list_technicians,
    api_show_appointment,
    api_show_technician,
    api_cancel_status,
    api_finish_status,
)

urlpatterns = [
    path(
        'technicians/',
        api_list_technicians,
        name='api_create_technician',
    ),
    path(
        'technicians/<int:id>',
        api_show_technician,
        name='api_show_technician',
    ),
    path(
        'appointments/',
        api_list_appointment,
        name='api_create_appointment',
    ),
    path(
        'appointments/<int:id>',
        api_show_appointment,
        name='api_show_appointment',
    ),
    path(
        'appointments/<int:id>/cancel',
        api_cancel_status,
        name='api_cancel_status',
    ),
    path(
        'appointments/<int:id>/finish',
        api_finish_status,
        name='api_finish_status',
    ),
]
