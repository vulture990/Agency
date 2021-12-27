from django.db import models
from datetime import datetime
# Create your models here.
class Contact(models.Model):
    name=models.CharField(max_length=200)
    email=models.EmailField(max_length=200)
    subject=models.CharField(max_length=200)
    message=models.TextField(blank=True)
    # contact_data=models.DataTimeField(default=datetime.now,blank=True)

    def __str__(self):
        return self.name + ' - ' + self.email  + ' - ' + self.subject
