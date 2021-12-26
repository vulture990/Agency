from django.contrib import admin

from .models import Listing

# Register your models here.


class ListingAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'need_type', 'list_date','employee','is_published')
    list_display_links = ('id', 'title')
    list_filter=('employee',)
    list_editable=('is_published',)
    search_fields=('title', )
    list_per_page=25
admin.site.register(Listing,ListingAdmin)