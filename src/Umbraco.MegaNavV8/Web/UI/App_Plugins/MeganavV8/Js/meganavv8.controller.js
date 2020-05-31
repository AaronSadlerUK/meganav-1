﻿function MeganavV8($scope, editorService, meganavResourceV8) {

    $scope.items = [];

    if (!_.isEmpty($scope.model.value)) {
        // retreive the saved items
        $scope.items = $scope.model.value;

        // get updated entities for content
        getItemEntities($scope.items);
    }

    $scope.add = function () {
        openSettings(null, function (navItem) {
            // add item to scope
            $scope.items.push(buildNavItem(navItem));
        });
    };

    $scope.edit = function (item) {
        openSettings(item, function (navItem) {
            // update item in scope
            // assign new values via extend to maintain refs
            angular.extend(item, buildNavItem(navItem));
        });
    };

    $scope.remove = function (item) {
        item.remove();
    };

    $scope.isVisible = function (item) {
        return $scope.model.config.removeNaviHideItems == true ? item.naviHide !== true : true;
    };

    $scope.$on("formSubmitting", function (ev, args) {
        $scope.model.value = $scope.items;
    });

    function getItemEntities(items) {
        _.each(items, function (item) {
            if (item.udi) {
                meganavResourceV8.getById(item.udi)
                    .then(function (response) {
                        angular.extend(item, response.data);
                    }
                );

                if (item.children.length > 0) {
                    getItemEntities(item.children);
                }
            }
        });
    }

    function openSettings(item, callback) {

        var settingsEditor = {
            title: "Settings",
            view: "/App_Plugins/MeganavV8/Views/settings.html",
            size: "small",
            currentTarget: item,
            submit: function (model) {
                if (model.target.anchor && model.target.anchor[0] !== '?' && model.target.anchor[0] !== '#') {
                    model.target.anchor = (model.target.anchor.indexOf('=') === -1 ? '#' : '?') + model.target.anchor;
                }
                if (model.target.udi) {
                    meganavResourceV8.getById(model.target.udi)
                        .then(function (response) {
                            // merge metadata
                            angular.extend(model.target, response.data);

                            callback(model.target);
                        }
                    );
                }
                else {
                    callback(model.target);
                }

                editorService.close();
            },
            close: function () {
                editorService.close();
            }
        };

        editorService.open(settingsEditor);
    }

    function buildNavItem (data) {
        return {
            id: data.id,
            udi: data.udi,
            name: data.name,
            title: data.title,
            target: data.target,
            queryString: data.anchor,
            url: data.url + data.anchor|| "#",
            children: data.children || [],
            icon: data.icon || "icon-link",
            published: data.published,
            naviHide: data.naviHide
        }
    }
}

angular.module("umbraco").controller("Our.Umbraco.MeganavV8.MeganavController", MeganavV8);

app.requires.push("ui.tree");