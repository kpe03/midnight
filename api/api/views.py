import requests
from django.http import JsonResponse
"""
views for midnight api
"""

""" OPEN LIBRARY API """
""" search request """
def search_books(request):
    query = request.GET.get('q', '')
    url = 'https://openlibrary.org/search.json'
    params = {'q': query}

    response = requests.get(url, params=params)

    if response.status_code == 200:
        data = response.json()
        return JsonResponse(data)
    else:
        return JsonResponse({'error': 'Failed to fetch data from Open library API'},
                            status=500)