# Generated by Django 2.2.4 on 2020-08-07 21:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0011_auto_20200803_1941'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100, null=True)),
                ('image1', models.ImageField(blank=True, null=True, upload_to='product')),
                ('image2', models.ImageField(blank=True, null=True, upload_to='product')),
                ('image3', models.ImageField(blank=True, null=True, upload_to='product')),
            ],
        ),
        migrations.AddField(
            model_name='item',
            name='product_image',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.ProductImage'),
        ),
    ]
