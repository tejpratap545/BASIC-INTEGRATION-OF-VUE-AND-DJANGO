from django.db import models

# Create your models here.
class products(models.Model):
    title = models.CharField(max_length = 150)
    price =models.CharField(max_length=67)
    def __str__(self):
        return self.title
