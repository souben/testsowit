from django.db import models
from django.contrib.postgres.fields import ArrayField
# Create your models here.
class Plot(models.Model):
    title = models.CharField(max_length=50)
    coordinates = ArrayField(ArrayField(models.DecimalField(max_digits=19, decimal_places=14)))
    totalArea = models.IntegerField(default=0)
