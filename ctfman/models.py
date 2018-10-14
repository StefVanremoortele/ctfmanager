from enum import Enum

from django.contrib.auth.models import AbstractBaseUser, User
from django.db import models
from django.utils import timezone



class Hackathon(models.Model):
    """
    The "Challenge" model for the CTFManager app
    """
    name = models.CharField(blank=False, max_length=50)
    # owner = models.ForeignKey('auth.User', 
    # related_name='Hackathons',
    # on_delete=models.CASCADE)
    startDate = models.DateTimeField(
        default=timezone.now
    )
    endDate = models.DateTimeField(
        default=timezone.now
    )
    rating = models.IntegerField(default=1)
    participants = models.ManyToManyField(User, blank=True)
    

    def __str__(self):
        return "{}".format(self.name)

# class ChallengeType(Enum):
#     REV = 'Reverse Engineering'
#     MISC = 'Miscellaneous'
#     CRYPTO = 'Cryptography'
#     WEB = 'Web Applications'
#     PUZZLE = 'Puzzles'

class Challenge(models.Model):
    """
    The "Challenge" model for the CTFmanager app
    """
    title = models.CharField(max_length=50)
    remarks = models.CharField(default='', blank=True, max_length=500)
    solvers = models.ManyToManyField(User, blank=True)
    hackathon = models.ForeignKey(Hackathon, related_name='challenges', blank=False, on_delete=models.CASCADE)
    # type = models.CharField(
    #     max_length = 10,
    #     choices=[(tag, tag.value) for tag in ChallengeType],
    #     default=ChallengeType.MISC
    # )
    TYPE_CHOICES = (
        ( '', ''),
        ('REV', 'Reverse Engineering'),
        ('MISC', 'Miscellaneous'),
        ('CRYPTO', 'Cryptography'),
        ('WEB', 'Web Applications'),
        ('PUZZLE', 'Puzzles'),
    )   
    type = models.CharField(
        max_length = 6,
        choices=TYPE_CHOICES,
        blank=True,
        default=None
    )
    def __str__(self):
        return self.title

class LogEvent(models.Model):
    """
    The "Challenge" model for the CTFmanager app
    """
    # additional = models.CharField(max_length=50);
    logType = models.CharField(max_length=50);
    level = models.IntegerField();
    fileName = models.CharField(max_length=50);
    lineNumber = models.CharField(max_length=10);
    message = models.CharField(max_length=500);
    timestamp = models.DateTimeField(
        default = timezone.now
    );
    