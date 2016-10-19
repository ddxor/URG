Rationale
==

For such a simple one-off 1-page app it didn't really make sense to use a full blown MVC framework like Laravel or Zend Framework. The Shopify REST API is also quite straightforward; so I opted to design a backend microservice using [Silex](http://silex.sensiolabs.org/) and the frontend using some industry standard technology like [Foundation](http://foundation.zurb.com/) and [jQuery](https://jquery.com/). In the spirit of a microservice the backend isn't very "smart" in itself, and fundamentally just acts as a proxy to the Shopify Product API. A larger project would obviously require a more sophisticated backend. See the "To-do/Nice-to-have's" for more ideas on this. The frontend is responsive and the backend microservice is designed to operate like a REST API (with limited list+create functionality).

Intro
==

A simple web interface that lists items in a Shopify store and allows a user to add a new item.

Getting started
==

Clone the repository and from the repo's root directory run `composer install` followed by `php -S 127.0.0.1:8000 -t public` to start a PHP webserver on port 8000 serving out of the public/ folder. To browse the web interface point your browser at http://127.0.0.1:8000.

Technology used
==

1. [Silex micro-framework](http://silex.sensiolabs.org/) used to create the microservice backend. Silex is based on Symfony
2. [Foundation](http://foundation.zurb.com) as a responsive frontend framework
3. [jQuery](https://jquery.com/) for interactive elements
4. [Composer](https://getcomposer.org/) for PHP dependency management
5. [Httpful](http://phphttpclient.com/) for a friendly & convenient REST-orientated HTTP client

To-do/Nice-to-have's
==

If time and requirements allowed:

1. [Vagrant](http://vagrantup.com) to create a portable development environment
2. Error and exception handling with a service like [Airbrake](https://airbrake.io/)
3. Some unit tests written in PHPUnit
4. A UAT written in [behat](http://behat.org/en/latest/)
5. Caching or smarter handling of validation of input on the backend. Input is passed blindly to Shopify in the spirit of a microservice but this could be improved
6. Image upload functionality & a real-time image upload progress indicator
7. A full blown MVC/MVVM framework like Laravel or Zend Framework
