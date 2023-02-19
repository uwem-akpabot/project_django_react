from rest_framework.serializers import ModelSerializer
from patient.models import Patient, SoapNote

class PatientSerializer(ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'

class SoapNoteSerializer(ModelSerializer):
    class Meta:
        model = SoapNote
        fields = '__all__'