# Generated by Django 2.2.4 on 2020-10-06 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0041_productimage_local_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shop',
            name='preferred_language',
            field=models.CharField(blank=True, choices=[('English', 'English'), ('Malayalam', 'Malayalam')], max_length=20, null=True),
        ),
    ]
