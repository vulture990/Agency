from django.contrib import admin
from .models import Employee

class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('id','employee', 'date_hired')
    # list_display_links = ('id', 'name')
    # search_fields = ('name', )
    list_per_page = 25

admin.site.register(Employee, EmployeeAdmin)
