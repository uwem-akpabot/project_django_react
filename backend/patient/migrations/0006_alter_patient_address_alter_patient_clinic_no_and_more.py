# Generated by Django 4.1.1 on 2023-02-19 12:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patient', '0005_alter_patient_nextkin'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patient',
            name='address',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='patient',
            name='clinic_no',
            field=models.CharField(max_length=8),
        ),
        migrations.AlterField(
            model_name='patient',
            name='email',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='patient',
            name='nextkin',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]
