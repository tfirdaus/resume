"use strict";jQuery(function(e){var a={View:Backbone.View.extend({template:_.template(e("#tmpl-resume").html(),null,{evaluate:/<#([\s\S]+?)#>/g,interpolate:/\{\{\{([\s\S]+?)\}\}\}/g,escape:/\{\{([^\}]+?)\}\}(?!\})/g,variable:"resume"}),initialize:function(){_.bindAll(this,"render"),this.model.fetch(),this.model.on("change",this.render)},render:function(e){var a=e.toJSON();this.$el.append(this.template(a)),particlesJS("resume-header",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#aaa"},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#aaa",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},retina_detect:!0})}}),Model:Backbone.Model.extend({url:"resume.json"})};new a.View({el:"#resume",model:new a.Model})});