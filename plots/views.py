from django.http import HttpResponse, HttpResponseRedirect
from plots.models import Plot
from django.core.serializers import serialize
from django.http import JsonResponse
from django.urls import reverse


# Create your views here.
def index(request):
    plot = Plot.objects.all()
    data = serialize('json', plot )
    return HttpResponse(data, content_type="application/json")

def plot_details(request, plot_id):
    plot = Plot.objects.get(id=plot_id)
    data = serialize("json", [plot])
    return HttpResponse( data, content_type="application/json" )

def create(request):
    title = request.POST['title']
    coordinates = request.POST['coodinates']
    totalArea = request.POST['total area']
    plot = Plot(title=title, coordinates=coordinates, totalArea=totalArea)
    return HttpResponseRedirect( reverse('plots'))

    
