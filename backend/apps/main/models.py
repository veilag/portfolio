from django.db import models


class Tool(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField()
    link = models.CharField(max_length=150)
