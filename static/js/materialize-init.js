(function($){
  $(function(){

    // Plugin initialization
$('.slider').slider({full_width: true});
$('.tab-demo').show().tabs();
$('.parallax').parallax();
$('.modal-trigger').leanModal();
$('.scrollspy').scrollSpy();
$('.button-collapse').sideNav({'edge': 'left'});
$('.datepicker').pickadate({selectYears: 20});
$('select').not('.disabled').material_select();

// TEST CNN Feed: http://rss.cnn.com/rss/edition.rss
$('#divRss').FeedEk({
    FeedUrl:'http://rick.cogley.info/index.xml',
    MaxCount : 3,
    ShowDesc : false,
    ShowPubDate:true,
    DescCharacterLimit:50,
    TitleLinkTarget:'_blank',
    DateFormat: 'DD-MMM-YYYY, ddd, HH:MM',
    DateFormatLang:'en'
});

  }); // end of document ready
})(jQuery); // end of jQuery name space
