
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Listing
from .serializers import ListingSerializer, listingDetailSerializer
from datetime import datetime, timezone, timedelta
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Listing

@csrf_exempt
@api_view(['POST'])
def post( request, format=None):
        # listingDetailSerializer(data=request.data)
        data = request.data
        if(request.user)!=None:
            post=Listing.objects.create(
                employee=request.user.employee,
                title=data['title'],
                description=data['description'],
                need_type=data['need_type'],
                list_date=datetime.now(),
                is_published=True,
                slug=data['title']+str(datetime.now()),
                # upvote=0
            )
            post.save()
            # serializer=listingDetailSerializer(post, many=False)
            return Response({'sucess': 'Sucess Message '})

        else:
            return Response({'error': 'User not logged in'})



# class PostView(APIView):
#     def post(self,request):
#        if request.method=='POST':     
#             serializer = ListingSerializer(data=request.data)
#             if serializer.is_valid():
#                 serializer.save()
#                 return Response(serializer.data)
#             return Response(serializer.errors)

class ListingsView(ListAPIView):
    queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer
    lookup_field = 'slug'

class ListingView(RetrieveAPIView):
    queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
    serializer_class = listingDetailSerializer
    lookup_field = 'slug'


class SearchView(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer

    def post(self, request, format=None):
        queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
        data = self.request.data
        need_type = data['need_type']
        queryset = queryset.filter(need_type__iexact=need_type)
        serializer = ListingSerializer(queryset, many=True)
        return Response(serializer.data)
