jQuery(function($) {

  var Resume = {
    View: Backbone.View.extend({
      template: _.template($('#tmpl-resume').html(), null, {
        evaluate: /<#([\s\S]+?)#>/g,
        interpolate: /\{\{\{([\s\S]+?)\}\}\}/g,
        escape: /\{\{([^\}]+?)\}\}(?!\})/g,
        variable: 'resume'
      }),
      initialize: function() {

        _.bindAll(this, 'render');

        this.model.fetch();
        this.model.on('change', this.render);
      },
      render: function(model) {
        var resume = model.toJSON();
        this.$el.append(this.template(resume));

        // Run ParticlesJS.
        particlesJS('resume-header', {
          'particles': {
            'number': {
              'value': 80,
              'density': {
                'enable': true,
                'value_area': 800
              }
            },
            'color': {
              'value': '#aaa'
            },
            'opacity': {
              'value': 0.5,
              'random': false,
              'anim': {
                'enable': false,
                'speed': 1,
                'opacity_min': 0.1,
                'sync': false
              }
            },
            'size': {
              'value': 3,
              'random': true,
              'anim': {
                'enable': false,
                'speed': 40,
                'size_min': 0.1,
                'sync': false
              }
            },
            'line_linked': {
              'enable': true,
              'distance': 150,
              'color': '#aaa',
              'opacity': 0.4,
              'width': 1
            },
            'move': {
              'enable': true,
              'speed': 6,
              'direction': 'none',
              'random': false,
              'straight': false,
              'out_mode': 'out',
              'bounce': false,
              'attract': {
                'enable': false,
                'rotateX': 600,
                'rotateY': 1200
              }
            }
          },
          'retina_detect': true
        });
      }
    }),
    Model: Backbone.Model.extend({
      url: 'resume.json',
    }),
  };

  var timeline = new Resume.View({
    el: '#resume',
    model: new Resume.Model(),
  });
});
