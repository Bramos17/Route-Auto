from .models import Appointment, AutomobileVO, Technician
from common.json import ModelEncoder


class AutomobileVODetailEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ['vin', 'sold']


class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = ['first_name', 'last_name', 'employee_id', 'id']


class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = [
        'first_name',
        'last_name',
        'employee_id',
        'id',
    ]


class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = ['customer', 'status']


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = [
        'date_time',
        'reason',
        'status',
        'vin',
        'customer',
        'technician',
    ]

    encoders = {
        'technician': TechnicianListEncoder(),
    }
