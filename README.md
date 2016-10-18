Intro
==

A simple web interface that lists items in a Shopify store and allows a user to add a new item.

Getting started
==

Clone the repository and from the repo's root directory run `composer install` followed by `php -S 127.0.0.1:8000 -t public` to start a PHP webserver on port 8000 serving out of the public/ folder. To browse the web interface point your browser at http://127.0.0.1:8000.

Technology used
==

[Silex micro-framework](http://silex.sensiolabs.org/) used to create the microservice backend

To-do/Nice-to-have's
==

If time and requirements allowed:

1. [Vagrant](http://vagrantup.com) to create a portable development environment
2. Error and exception handling with a service like [Airbrake](https://airbrake.io/)
3. Some unit tests written in PHPUnit
4. A UAT written in [behat](http://behat.org/en/latest/)
5. Caching or smarter handling of validation of input on the backend. Input is passed blindly to Shopify in the spirit of a microservice but this could be improved
6. A real-time image upload progress indicator
