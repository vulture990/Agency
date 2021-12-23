from django.db import models
from django.utils.timezone import now
from employee.models import Employee
# Create your models here.

# lISITING OF THE EMPLOYEES NEEDS
class Listing(models.Model):
    class NeedType(models.TextChoices):
        gas='Gasoil'
        travel='Travel'
        vacation='Vacation'
        other='Other'
    # why not cascade meaning if the employee is deleted, the listing of his need will not be deleted 
    employee=models.ForeignKey(Employee,on_delete=models.DO_NOTHING) 
    slug=models.CharField(max_length=200,unique=True)# SLUG INSTEAD OF ID
    title=models.CharField(max_length=150)
    description=models.TextField(blank=True)
    need_type=models.CharField(max_length=50,choices=NeedType.choices,default=NeedType.other)
    list_date=models.DateTimeField(default=now,blank=True)
    is_published = models.BooleanField(default=True)

    def __str__(self):
        return self.title +' posted by '+ self.employee.name + ' at ' + self.list_date


