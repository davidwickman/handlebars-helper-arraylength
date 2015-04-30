module.exports.register = function( Handlebars, options, params ) {

  Handlebars.registerHelper( 'arraylength', function( array ) {
    return array.length;
  } );

};
