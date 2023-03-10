# Generated by Django 4.1.1 on 2023-02-19 15:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('patient', '0006_alter_patient_address_alter_patient_clinic_no_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='SoapNote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_of_visit', models.CharField(max_length=10)),
                ('subjective', models.TextField()),
                ('objective', models.TextField()),
                ('assessment', models.TextField()),
                ('plan', models.TextField()),
                ('comment', models.TextField(blank=True, null=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('patient', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='patient.patient')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
