from django.contrib import admin
from .models import UserAccount
   

class AccountAdmin(admin.ModelAdmin):
    list_display =('id','email','name', 'is_staff')
admin.site.register(UserAccount,AccountAdmin)
