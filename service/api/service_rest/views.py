import json
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .encoders import (
    AppointmentDetailEncoder,
    AppointmentListEncoder,
    TechnicianDetailEncoder,
    TechnicianListEncoder,
)
from .models import Appointment, Technician


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        try:
            technicians = Technician.objects.all()
            return JsonResponse(
                {'technicians': technicians},
                encoder=TechnicianListEncoder
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {'message': 'No technicians to list'},
                status=400,
            )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianDetailEncoder,
                safe=False,
            )
        except TypeError:
            return JsonResponse(
                {'message': 'Invalid key name'},
                status=400,
            )


@require_http_methods(["GET", "DELETE"])
def api_show_technician(request, id):
    if request.method == "GET":
        try:
            technician = Technician.objects.get(id=id)
            return JsonResponse(
                technician,
                encoder=TechnicianDetailEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {'message': 'Invalid technician id'},
                status=400,
            )
    else:
        count, _ = Technician.objects.filter(id=id).delete()
        return JsonResponse(
            {'deleted': count > 0},
            status=200,
        )


@require_http_methods(["GET", "POST"])
def api_list_appointment(request):
    if request.method == "GET":
        try:
            appointments = Appointment.objects.all()
            return JsonResponse(
                {'appointments': appointments},
                encoder=AppointmentListEncoder,
            )
        except Appointment.DoesNotExist:
            JsonResponse(
                {'message': 'No appointments to list'},
                status=400,
            )
    else:
        try:
            content = json.loads(request.body)
            try:
                technician = Technician.objects.get(id=content['technician'])
                content['technician'] = technician
            except Technician.DoesNotExist:
                return JsonResponse(
                    {'message': 'Invalid technician'},
                    status=400,
                )
            appointment = Appointment.objects.create(**content)
            return JsonResponse(
                appointment,
                encoder=AppointmentDetailEncoder,
                safe=False,
            )
        except TypeError:
            return JsonResponse(
                {'message': 'Invalid key name'},
                status=400,
            )


@require_http_methods(["GET", "DELETE"])
def api_show_appointment(request, id):
    if request.method == "GET":
        try:
            appointment = Appointment.objects.get(id=id)
            return JsonResponse(
                appointment,
                encoder=AppointmentDetailEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {'message': 'Invalid appointment id'},
                status=400,
            )
    else:
        count, _ = Appointment.objects.filter(id=id).delete()
        return JsonResponse(
            {'deleted': count > 0},
            status=200,
        )


@require_http_methods(["PUT"])
def api_cancel_status(request, id):
    try:
        appointment = Appointment.objects.get(id=id)
        appointment.cancel()
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )
    except Appointment.DoesNotExist:
        return JsonResponse(
            {'message': 'Invalid appointment id'},
            status=400,
        )


@require_http_methods(["PUT"])
def api_finish_status(request, id):
    try:
        appointment = Appointment.objects.get(id=id)
        appointment.finish()
        return JsonResponse(
            appointment,
            encoder=AppointmentDetailEncoder,
            safe=False,
        )
    except Appointment.DoesNotExist:
        return JsonResponse(
            {'message': 'Invalid appointment id'},
            status=400,
        )
