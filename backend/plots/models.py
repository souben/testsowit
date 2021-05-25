from django.contrib.gis.db import models

# Create your models here.
class Plot(models.Model):
    
    title = models.CharField(max_length=50)
    totalArea = models.IntegerField(default=None)
    polygon = models.PolygonField(default=None)
    
    class Meta:
        db_table = "plot"
        managed=True