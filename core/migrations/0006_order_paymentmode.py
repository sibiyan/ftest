# Generated by Django 2.2.4 on 2020-07-29 19:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_modeofpayment'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='paymentMode',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.ModeOfPayment'),
        ),
    ]
