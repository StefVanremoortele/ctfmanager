# Generated by Django 2.1.2 on 2018-10-07 17:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ctfman', '0005_auto_20181007_1704'),
    ]

    operations = [
        migrations.AlterField(
            model_name='challenge',
            name='type',
            field=models.CharField(blank=True, choices=[(None, ''), ('REV', 'Reverse Engineering'), ('MISC', 'Miscellaneous'), ('CRYPTO', 'Cryptography'), ('WEB', 'Web Applications'), ('PUZZLE', 'Puzzles')], default=None, max_length=6),
        ),
    ]
