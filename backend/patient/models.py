from django.db import models
from django.contrib.auth.models import User

class Patient(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    fname = models.CharField(max_length=15)
    sname = models.CharField(max_length=15)
    clinic_no = models.CharField(max_length=15)
    address = models.TextField()
    phone = models.CharField(max_length=12, null=True, blank=True)
    gender = models.CharField(max_length=6)
    email = models.CharField(max_length=50, null=True, blank=True)
    nextkin = models.CharField(max_length=50, null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)