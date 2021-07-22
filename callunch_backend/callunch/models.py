from django.db import models

# Create your models here.
class LunchList(models.Model):
    name = models.TextField(max_length=20)
    order = models.TextField(max_length=100)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.name