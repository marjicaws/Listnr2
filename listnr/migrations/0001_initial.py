# Generated by Django 4.0.1 on 2022-01-31 14:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Listnr',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('bio', models.CharField(default='A Music Lover!', max_length=400)),
                ('career', models.CharField(default='Full-time Listnr', max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256)),
                ('image', models.CharField(blank=True, max_length=300)),
                ('audio', models.CharField(max_length=300)),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='songs', to='listnr.listnr')),
            ],
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('review', models.CharField(max_length=300)),
                ('title', models.CharField(max_length=256)),
                ('likes', models.IntegerField()),
                ('mix_error', models.BooleanField(default=False)),
                ('recording_error', models.BooleanField(default=False)),
                ('writing_changes', models.BooleanField(default=False)),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='listnr.listnr')),
                ('song', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='listnr.song')),
            ],
        ),
    ]
