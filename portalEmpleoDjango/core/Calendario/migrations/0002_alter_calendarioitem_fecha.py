# Generated by Django 5.0.4 on 2024-06-07 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Calendario', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='calendarioitem',
            name='fecha',
            field=models.DateField(),
        ),
    ]