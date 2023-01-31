from rest_framework.serializers import ModelSerializer
from patient.models import Patient

class PatientSerializer(ModelSerializer):
    class Meta:
        model = Patient
        fields = '__all__'