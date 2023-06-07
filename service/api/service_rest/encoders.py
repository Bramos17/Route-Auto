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
    properties = [
        'id',
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

    def get_extra_data(self, o):
        count = AutomobileVO.objects.filter(vin=o.vin).count()
        return {"is_vip": count > 0}


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
