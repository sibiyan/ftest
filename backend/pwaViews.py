import logging
import random
import time

from django.http import Http404
from django.shortcuts import render
from django.templatetags.static import static
from django.urls import reverse
from django.utils import timezone
from django.views.decorators.cache import never_cache
from django.views.generic import TemplateView

from backend import version


logger = logging.getLogger('djpwa.pwa.views')


def offline(request):
    return render(request, 'offline.html')


def my_page(request):
    routes = {
        'Home': reverse('home'),
        'Say hi': reverse('say_something', kwargs={'key': 'hi'}),
        'Say bye': reverse('say_something', kwargs={'key': 'bye'}),
        'Say something invalid': reverse('say_something', kwargs={'key': 'invalid'}),
        'Response in random time': reverse('random_response'),
        'Fill dynamic cache': reverse('fill_dynamic_cache', kwargs={'id': 1}),
        'Must not cache': reverse('must_not_cache'),
    }

    # return render(request, 'pwa/my_page.html', context={'routes': routes})
    return render(request, 'index.html', context={'routes': routes})


def say_something(request, key):
    things_to_say = {
        'hi': 'Hello world',
        'bye': 'Have a nice day',
    }

    if key not in things_to_say:
        raise Http404(f'{key} is not a valid thing to say')

    return render(request, 'pwa/say_something.html', context={'thing': things_to_say[key]})


def random_response(request):
    response_time_ms = random.choice((0, 10, 50, 100, 1_000, 10_000))
    response_time = response_time_ms / 1_000
    print(f'Selected response time {response_time}')
    time.sleep(response_time)
    return render(request, 'pwa/random_response.html', context={'response_time': response_time})


def fill_dynamic_cache(request, id):
    return render(request, 'pwa/fill_dynamic_cache.html', context={'id': id})


@never_cache
def must_not_cache(request):
    return render(request, 'pwa/must_not_cache.html', context={'requested_at': timezone.now()})


class ServiceWorkerView(TemplateView):
    template_name = 'sw.js'
    content_type = 'application/javascript'
    name = 'sw.js'

    def get_context_data(self, **kwargs):
        return {
            'version': version,
            'icon_url': static('splash.512x512.png'),
            'manifest_url': static('manifest.json'),
            # 'style_url': static('style.css'),
            # 'home_url': reverse('home'),
            'home_url': "/",
            # 'offline_url': reverse('offline'),
            'offline_url': 'offline.html',

        }
