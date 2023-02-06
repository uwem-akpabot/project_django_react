from django.db import models
from django.contrib.auth.models import User

class Patient(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    fname = models.CharField(max_length=15, null=False, blank=False)
    mname = models.CharField(max_length=15, null=True, blank=True)
    sname = models.CharField(max_length=15, null=False, blank=False)
    gender = models.CharField(max_length=6, null=False, blank=False)
    phone = models.CharField(max_length=12, null=False, blank=False)
    email = models.CharField(max_length=50, null=True, blank=True)
    address = models.TextField()
    others = models.CharField(max_length=100, null=True, blank=True)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)