/**
 * Created by zc1415926 on 2016/3/16.
 */
$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var Nav = require('./components/partials/nav');
//var About = require('./components/about/aboutPage');
//var Header = require('./components/common/header');

(function(win){
    "use strict";
    var App = React.createClass({
        render: function () {

            var Child = Home;

            //switch (this.props.route) {
            //    case 'about':
            //        Child = About;
            //        break;
            //    default:
            //        Child = Home;
            //}

            return (
                <div>
                    <Nav />
                    <Child />
                </div>
            );
        }
    });

    function render() {
        var route = win.location.hash.substr(2);
        React.render(<App route={route}/>, document.getElementById('app'));

        console.log(route);
    }

    win.addEventListener('hashchange', render);
    render();
})(window);