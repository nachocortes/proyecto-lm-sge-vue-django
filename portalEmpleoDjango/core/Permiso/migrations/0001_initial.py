# Generated by Django 5.0.4 on 2024-06-07 06:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('RRHH', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Permiso',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
                ('causa', models.CharField(max_length=100)),
                ('decripcion', models.TextField(blank=True, max_length=100, null=True)),
                ('estado', models.BooleanField(default=False)),
                ('created', models.DateField(auto_now_add=True)),
                ('updated', models.DateField(auto_now=True)),
                ('empleado', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='RRHH.empleado')),
            ],
            options={
                'verbose_name': 'permiso',
                'verbose_name_plural': 'permisos',
                'db_table': 'Permiso',
                'ordering': ['id'],
            },
        ),
    ]
