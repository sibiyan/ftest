# Generated by Django 2.2.4 on 2020-08-02 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_appinfo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='appinfo',
            name='offerMessage',
            field=models.TextField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='appinfo',
            name='shippingMessage',
            field=models.TextField(blank=True, max_length=250, null=True),
        ),
    ]
