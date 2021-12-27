from django.urls import path
from django.views.decorators.csrf import csrf_exempt
from .views import ListingsView, ListingView, SearchView
from . import views
urlpatterns = [
    path('', ListingsView.as_view()),
    path('create',views.post),
    path('search', SearchView.as_view()),
    path('<slug>', ListingView.as_view()),
]
