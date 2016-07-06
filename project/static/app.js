(function() {
    'use strict';

    var app = angular.module('restReminder', ['angular-web-notification', 'ngAudio']);

    app.controller('ReminderController', ['$scope', '$interval', 'webNotification', 'ngAudio', function($scope, $interval, webNotification, ngAudio) {
        $scope.remindSound = ngAudio.load('static/reminder.mp3');
        this.startReminder = function() {
            $interval(function() {
                webNotification.showNotification('Reminder', {
                    body: 'Take some rest, Dude!',
                    icon: 'my-icon.ico',
                    onClick: function onNotificationClicker() {
                        console.log('Notification clicked.');
                    },
                    autoClose: 4000
                }, function onShow(error, hide) {
                    if (error) {
                        window.alert('Unable to show notification: ' + error.message);
                    } else {
                        console.log('Notification Shown.');

                        $scope.remindSound.play();

                        setTimeout(function hideNotification() {
                            console.log('Hiding notification....');
                            hide();
                        }, 5000);
                    }
                });
            }, 900000);
        };
        
    }]);

})();