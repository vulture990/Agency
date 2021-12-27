from django.db import models
from datetime import datetime
from accounts.models import UserAccount
class Employee(models.Model):
    id=models.AutoField(primary_key=True)
    employee = models.OneToOneField(UserAccount, on_delete=models.CASCADE,null=True)
    name = models.CharField(max_length=50,null=True)
    # name=employee.name
    # photo = models.ImageField(upload_to='photos/%Y/%m/%d/')
    # job_departement = models.TextField(blank=True)
    # phone = models.CharField(max_length=20)
    email = models.CharField(max_length=100,null=True)
    is_chief_of_departement = models.BooleanField(default=False)
    date_hired = models.DateTimeField(default=datetime.now, blank=True)
    def __str__(self):
        return self.name

