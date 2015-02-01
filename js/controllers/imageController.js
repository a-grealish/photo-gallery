var imageController = angular.module('imageController', []).controller('imageController', function($scope){
  $scope.photo = {
    title: 'Photo Title',
    category: 'Category',
    url: 'http://placehold.it/1200x800/jpg',
    thumbnail_url: 'http://placehold.it/400x300/jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pellentesque varius orci, sed consequat ipsum tincidunt sed. Nulla at maximus mi. Praesent ac sapien enim. Fusce convallis nisl in risus scelerisque euismod. Praesent porttitor sollicitudin elit, vel mattis nisi euismod quis. Morbi tristique lacinia fermentum. Integer fringilla elementum aliquet. Nullam quis ultrices ante, non suscipit enim. Quisque quis ante arcu. Nullam luctus elit at porttitor elementum. Nulla accumsan magna eget pulvinar congue. Morbi quis erat et mi gravida lacinia at vel enim. Ut suscipit, mauris quis pharetra accumsan, nibh odio ornare nisl, sit amet dignissim libero nunc at risus. Donec tincidunt sem ligula, rutrum consequat enim ultricies vitae.',
    properties:[
    	{
    		name: "Location",
    		type: "text",
    		value: "London,United Kingdom"
    	},
    	{
    		name: "Date Taken",
    		type: "date",
    		value: null
    	},
    	{
    		name: "Dimensions",
    		type: "text",
    		value: "1200x800px"
    	},
    	{
    		name: "File Size",
    		type: "text",
    		value: "1.6MB"
    	},
    	{
    		name: "File Size",
    		type: "float",
    		value: 2.6
    	}
    ],
    tags: [
	    'tag1',
	    'tag2',
	    'tag3',
	    'tag4'
    ]
  };
});
