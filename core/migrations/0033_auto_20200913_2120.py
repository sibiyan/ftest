# Generated by Django 2.2.4 on 2020-09-13 15:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0032_auto_20200912_2122'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='v_is_available',
            field=models.BooleanField(default=True, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='is_available',
            field=models.BooleanField(default=True, null=True),
        ),
    ]