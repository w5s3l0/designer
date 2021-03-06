/**
 * Created by chief on 16/7/16.
 */

define('widget',[],function(){
    var init = function (el,name,jswidget){

        
        if(typeof name=='undefined'){
            return false;
        }
        
          
        var widgetViewModel = require('./viewModel/'+name+'Model.js');

        var widgetViewModelClone = widgetViewModel;

        $(el).data("model",widgetViewModelClone);

        ko.applyBindings(widgetViewModelClone,el);

        

        //ko.applyBindings(widgetViewModel,el); 
        
        // 导航条 当手机屏幕 icon触发导航条显示
        $(".nav-toggle").unbind("click").bind("click",function(){
            $(".xs-hide").toggleClass("xs-show");
        })
        if(name=="checkbox" || name=="radio"){
            u.compMgr.updateComp();
        }
        
        
        if(name == "widget7"){
            setTimeout(function(){
                $('#carousel-example-generic').carousel();
            }, 5000 );
        }
            
    };

    return {
        init:init
    }
});
