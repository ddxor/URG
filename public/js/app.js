$(document).foundation();

var productLoader = function() {
    this.init = function() {
        $.getJSON('/microservice.php/products', function(responseObj, noop, jqXHR) {
            $('div.loading').fadeOut(function() {
                $('div.data').removeClass('hide').hide().fadeIn();
            });

            if (jqXHR.status != 200) {
                $('.apiError').removeClass('hide');
            }

            if (responseObj.products.length > 0) {
                $.each(responseObj.products, function(index, product) {
                    var row = $('table.products tr.example').clone();
                    
                    $(row).find('td.title').html(product.title);
                    $(row).find('td.body_html').html(product.body_html);
                    $(row).find('td.vendor').html(product.vendor);
                    $(row).find('td.product_type').html(product.product_type);
                    $(row).removeClass('hide example');

                    $('table.products').append(row);
                });

                $('table.products').removeClass('hide');
            } else {
                $('.noProducts').removeClass('hide');
            }
        });
    };
};

var productCreatorHandler = function() {
    this.errors = [];
    this.product = {
        "product" : {}
    };

    this.setParam = function(key, value) {
        this.product.product[key] = value;
    };

    this.submit = function() {
        if (!$('.apiError').hasClass('hide')) {
            $('.apiError').addClass('hide');
        }

        if ($('.formError ul li').length > 0) {
            $('.formError ul li').remove();
        }

        if (!$('.formError').hasClass('hide')) {
            $('.formError').addClass('hide');
        }

        var success = $.ajax({
            url: '/microservice.php/products',
            contentType: 'application/json',
            data: JSON.stringify(this.product),
            dataType: 'json',
            processData: false,
            method: 'POST',
            error: function(jqXHR) {
                if (jqXHR.responseText) {
                    var responseObj = $.parseJSON(jqXHR.responseText);

                    if (Object.keys(responseObj.errors).length > 0) {
                        $.each(responseObj.errors, function(key, value) {
                            $('.formError ul').append('<li>Invalid field: ' + key + ' - ' + value + '</li>');
                        });

                        $('.formError').removeClass('hide');

                        return false;
                    }
                }

                $('.apiError').removeClass('hide');

                return false;
            }
        }).success(function(response, txtStatus, jqXHR) {
            if (jqXHR.status != 200 && jqXHR.status != 201) {
                $('.apiError').removeClass('hide');

                return false;
            }

            return true;
        });


        return success;
    }
};

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
