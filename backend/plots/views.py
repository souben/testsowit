from .models import Plot
from .serializers import PlotSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class PlotsList(APIView):
    
    def get(self, request, format=None):
        
        plots = Plot.objects.all()
        serializer = PlotSerializer(plots, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = PlotSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PlotDetails(APIView):

    def get_object(self, plot_id):
        try:
            return Plot.objects.get(pk=plot_id)
        except Plot.DoesNotExist:
            raise Http404

    def get(self, request,plot_id, format=None):
        plot = self.get_object(plot_id)
        serializer = PlotSerializer(plot)
        return Response(serializer.data)

    def put(self, request,plot_id, format=None):
        plot = self.get_object(plot_id)
        serializer = PlotSerializer(data=request.data)
        if serializer.is_valid():    
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request,plot_id, format=None):
        plot = self.get_object(plot_id)
        plot.delete()
        serializer = PlotSerializer(plot)
        return Response(status=status.HTTP_204_NO_CONTENT)
