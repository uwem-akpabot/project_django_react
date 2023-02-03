# from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import PatientSerializer
from patient.models import Patient

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
    patients = user.patient_set.all()
    # patients = Patient.objects.all()
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
        body = data['body']
    )
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