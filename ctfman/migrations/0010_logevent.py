# Generated by Django 2.1.2 on 2018-10-14 02:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ctfman', '0009_auto_20181007_1719'),
    ]

    operations = [
        migrations.CreateModel(
            name='LogEvent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('logMessage', models.CharField(max_length=500)),
                ('logType', models.CharField(max_length=50)),
            ],
        ),
    ]
