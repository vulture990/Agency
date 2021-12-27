from django.urls import path
from .views import EmployeeListView, EmployeeView, Is_Chief_Departement_View

urlpatterns = [
    path('', EmployeeListView.as_view()),
    # path('chiefdepart', Is_Chief_Departement_View.as_view()),
    path('<pk>', EmployeeView.as_view()),
]
