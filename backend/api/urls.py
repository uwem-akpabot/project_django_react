from django.urls import path
from . import views
from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('', views.getRoutes), 
    path('patients/', views.getPatients, name="patients"),
    path('patients/create/', views.createPatient, name="create-patient"), 
    path('patients/<str:pk>/', views.getOnePatient, name="patient"), 
    path('patients/<str:pk>/update/', views.updatePatient, name="update-patient"), 
    path('patients/<str:pk>/delete/', views.deletePatient, name="delete-patient"), 
    path('soapnote/add_soap_note/', views.addSoapNote, name="add-soap-note"), 
    path('soapnotes/', views.getSoapNotes, name="soapnotes"), 
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]