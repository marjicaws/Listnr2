# Generated by Django 4.0.1 on 2022-01-28 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listnr', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='mix_error',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='review',
            name='recording_error',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='review',
            name='writing_advice',
            field=models.BooleanField(default=False),
        ),
    ]