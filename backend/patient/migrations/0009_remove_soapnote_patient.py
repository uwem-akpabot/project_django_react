# Generated by Django 4.1.1 on 2023-02-19 17:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('patient', '0008_alter_soapnote_patient'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='soapnote',
            name='patient',
        ),
    ]
