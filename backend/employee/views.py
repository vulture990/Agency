from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Employee
from .serializers import EmployeeSerializer

class EmployeeListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    pagination_class = None

class EmployeeView(RetrieveAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class Is_Chief_Departement_View(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Employee.objects.filter(is_chief_of_departement=True)
    serializer_class = EmployeeSerializer
    pagination_class = None
