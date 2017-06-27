app.controller('TextosSite',
	['$scope', function($scope){
		$scope.titulo = 'Page Books'
	}]);

app.controller('MainController',
   	['$scope', function($scope){
     	$scope.products = 
     	[
       		{
       			name:'A Arte da Guerra',
       			price: 19,
       			//pubdate: new Date('1995', '03', '08'),
       			cover: 'img/arte-guerra.jpg',
       		},
     	 	{ 
    	 		name: 'As Provações de Apolo', 
   		 		price: 34, 
    	 		//pubdate: new Date('2013', '08', '01'), 
    	 		cover: 'img/provacoes-apolo.jpg',
     	 	},
       		{
        		name:'Anjos e Demônios',
       			price: 29,
        		//pubdate: new Date('2013', '08', '01'),
        		cover: 'img/anjos-demonios.jpg',
      	 	},
        	{
        		name:'Assassins Creed',
       			price: 33,
        		//pubdate: new Date('2013', '08', '01'),
        		cover: 'img/assassins-creed.jpg',
       		},
     	]
  	}]);