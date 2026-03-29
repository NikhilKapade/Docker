from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Food, Order
from .serializers import FoodSerializer, OrderSerializer

@api_view(['GET'])
def get_foods(request):
    foods = Food.objects.all()
    serializer = FoodSerializer(foods, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST'])
def orders(request):
    if request.method == 'GET':
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)