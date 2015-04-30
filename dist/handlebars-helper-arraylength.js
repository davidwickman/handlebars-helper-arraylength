// handlebars-helper-arraylength
// -----------------
// v0.1.1
//
// http://github.com/davidwickman/handlebars-helper-arraylength

module.exports.register = function( Handlebars, options, params ) {

  Handlebars.registerHelper( 'arraylength', function( array ) {
    return array.length;
  } );

};
