# Generated by Django 2.1.1 on 2018-10-06 00:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ctfman', '0005_challenge_hackathon'),
    ]

    operations = [
        migrations.AlterField(
            model_name='challenge',
            name='hackathon',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='challenges', to='ctfman.Hackathon'),
        ),
    ]
