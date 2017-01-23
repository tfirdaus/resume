jQuery(function($) {

  function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
      return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
      return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
  }

  var Resume = {
    View: Backbone.View.extend({
      resumeHeader: {
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
      },
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
      particle: function() {

        particlesJS('resume-header', this.resumeHeader);
      },
      skills: function(data) {

        var skillsChart = new Chart(document.getElementById('chart-skills'), {
          type: 'polarArea',
          options: {
            legend: {
              position: 'right'
            }
          },
          data: {
            labels: _.pluck(data.skills, 'label'),
            datasets: [{
              data: _.pluck(data.skills, 'confidence'),
              backgroundColor: _.pluck(data.skills, 'color')
            }]
          }
        });
      },
      render: function(model) {

        var self;
        var resume = model.toJSON();

        this.$el.append(this.template(resume));

        this.particle();
        this.skills(resume);
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
