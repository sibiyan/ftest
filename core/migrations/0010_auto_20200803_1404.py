# Generated by Django 2.2.4 on 2020-08-03 14:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0009_auto_20200802_1549'),
    ]

    operations = [
        migrations.AddField(
            model_name='appinfo',
            name='phone1',
            field=models.CharField(blank=True, max_length=11, null=True),
        ),
        migrations.AddField(
            model_name='appinfo',
            name='phone2',
            field=models.CharField(blank=True, max_length=11, null=True),
        ),
    ]
