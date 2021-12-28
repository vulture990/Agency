from django.db import models
from django.db.models.fields import SlugField
from django.utils.timezone import now
from employee.models import Employee
from rest_framework.response import Response

# Create your models here.

# lISITING OF THE EMPLOYEES NEEDS
class Listing(models.Model):
    # class NeedType(models.TextChoices):
    #     gas='Gasoil'
    #     travel='Travel'
    #     vacation='Vacation'
    #     other='Other'
    # Why not cascade meaning if the employee is deleted, the listing of his need will not be deleted 
    employee=models.ForeignKey(Employee,on_delete=models.DO_NOTHING) 
    # SLUG INSTEAD OF ID
    slug=models.CharField(max_length=200)
    # slug=models.AutoField(auto_created=True)
    title=models.CharField(max_length=150)
    description=models.TextField(blank=True)
    # need_type=models.CharField(max_length=50,choices=NeedType.choices,default=NeedType.other)
    need_type=models.CharField(max_length=50)
    list_date=models.DateTimeField(default=now,blank=True)
    is_published = models.BooleanField(default=True)
    # upvote=models.CharField("Upvote",max_length=50,default=0)
    upvote=models.IntegerField(default=0)
    
    def __str__(self):
        return self.title +' posted by '+ self.employee.name + ' at :  ' + str(self.list_date)   


    class Meta:
        ordering = ['-list_date']