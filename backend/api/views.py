# from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import PatientSerializer, SoapNoteSerializer
from patient.models import Patient, SoapNote

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh'
    ]
    
    return Response(routes)

"""
GET ALL PATIENTS
"""
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getPatients(request):
    user = request.user
    # patients = user.patient_set.all()
    patients = Patient.objects.all()
    serializer = PatientSerializer(patients, many=True) 
    return Response(serializer.data)

"""
GET A SINGLE PATIENT
"""
@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getOnePatient(request, pk):
    user = request.user
    # patient = user.patient_set.get(id=pk)
    patient = Patient.objects.get(id=pk)
    serializer = PatientSerializer(patient, many=False) 
    return Response(serializer.data)

"""
CREATE NEW PATIENT
"""
@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def createPatient(request):
    user = request.user
    data = request.data #get the json data

    patient = Patient.objects.create(
        fname = data['fname'],
        sname = data['sname'],
        clinic_no = data['clinic_no'],
        address = data['address'],
        phone = data['phone'],
        gender = data['gender'],
        email = data['email'],
        nextkin = data['nextkin']
        # user_id = user
    )

    # patient = user.patient_set.create(
    #     fname = data['fname'],
    #     mname = data['mname'],
    #     sname = data['sname'],
    #     gender = data['gender'],
    #     phone = data['phone'],
    #     email = data['email'],
    #     address = data['address'],
    #     others = data['others'],
    #     user_id = user
    # )

    # patient = user.patient_set.create(
    #     body = data['body']
    # )
    serializer = PatientSerializer(patient, many=False) 
    return Response(serializer.data)

"""
UPDATE PATIENT
"""
@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def updatePatient(request, pk):
    user = request.user
    data = request.data #get the json data
    # patient = user.patient_set.get(id=pk)
    patient = Patient.objects.get(id=pk)
    serializer = PatientSerializer(instance=patient, data=data) 
    
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

"""
DELETE PATIENT
"""
@api_view(['DELETE'])
# @permission_classes([IsAuthenticated])
def deletePatient(request, pk):
    user = request.user
    # patient = user.patient_set.get(id=pk)
    patient = Patient.objects.get(id=pk)
    patient.delete() 
    return Response('Patient has been deleted')


"""
////// SOAP NOTES
"""

"""
GET ALL SOAP NOTES
"""
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getSoapNotes(request):
    user = request.user
    # patient = user.patient_set.all()
    soapnote = SoapNote.objects.all
    serializer = SoapNoteSerializer(soapnote, many=True) 
    return Response(serializer.data)

"""
CREATE NEW SOAP NOTES 
"""
@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def addSoapNote(request):
    user = request.user
    data = request.data #get the json data

    soapnote = SoapNote.objects.create(
        patient_id = data['patient'],
        date_of_visit = data['date_of_visit'],
        subjective = data['subjective'],
        objective = data['objective'],
        assessment = data['assessment'],
        plan = data['plan'],
        comment = data['comment']
        # user_id = user
    )
    serializer = SoapNoteSerializer(soapnote, many=False) 
    return Response(serializer.data)

"""
UPDATE SOAP NOTES 
"""
# @api_view(['PUT'])
# # @permission_classes([IsAuthenticated])
# def updateSoapNote(request, pk):
#     user = request.user
#     data = request.data #get the json data
#     # patient = user.patient_set.get(id=pk)
#     patient = Patient.objects.get(id=pk)
#     serializer = PatientSerializer(instance=patient, data=data) 
    
#     if serializer.is_valid():
#         serializer.save()

#     return Response(serializer.data)

"""
DELETE SOAP NOTES 
"""
# @api_view(['DELETE'])
# # @permission_classes([IsAuthenticated])
# def deleteSoapNote(request, pk):
#     user = request.user
#     # patient = user.patient_set.get(id=pk)
#     patient = Patient.objects.get(id=pk)
#     patient.delete() 
#     return Response('Patient has been deleted')