# Generated by Django 2.2.4 on 2020-08-23 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0020_auto_20200821_2336'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='paymentMode',
        ),
        migrations.AddField(
            model_name='order',
            name='paymentMode',
            field=models.ManyToManyField(blank=True, null=True, to='core.ModeOfPayment'),
        ),
    ]
